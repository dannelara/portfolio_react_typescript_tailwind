import React, { useEffect, useState } from "react";
import sanitizeString from "utils/sanitizeString";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import * as API from "./fetch";

interface DocFinderProps {}

const DocFinder: React.FC<DocFinderProps> = ({}) => {
  const [docs_loaded, set_docs_loaded] = useState(false);
  const [current_page, set_current_page] = useState<number>(1);
  const [articles, set_articles] = useState<any>();
  const [article_in_view, set_article_in_view] = useState<any>();
  const [search_string, set_search_string] = useState<String>("");
  const [loading, set_loading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [result_details, set_result_details] = useState({
    current: "",
    last: "",
    total: "",
  });

  const getDocuments = async () => {
    set_docs_loaded(false);
    const filter_opts = {
      ["start"]: startDate,
      ["end"]: endDate,
    };

    const data = await API.fetchArticles(
      "",
      search_string,
      current_page,
      filter_opts
    );

    const articles = data?.dokumentlista.dokument;

    set_articles(articles);

    set_result_details((old) => ({
      ...old,
      ["current"]: data?.dokumentlista["@traff_fran"],
      ["last"]: data?.dokumentlista["@traff_till"],
      ["total"]: data?.dokumentlista["@traffar"],
    }));

    set_docs_loaded(true);
  };

  const onOpenArticle = async (e: any) => {
    set_loading(true);
    try {
      if (e.currentTarget.id !== null) {
        const article_text = await API.fetchFullArticle(
          `${e.currentTarget.id}`
        );
        set_article_in_view(article_text);
        set_loading(false);
      }
    } catch (error) {}
  };

  //   const onNext = () => {};
  const onNext = async () => {
    // await API.fetchArticles(data.dokumentlista["@nasta_sida"]);
    // document.querySelector("#articles").scrollTop = 0;
  };

  const onPrev = () => {};

  useEffect(() => {}, [articles]);

  return (
    <div className="relative h-full sm: hidden w-full md:flex border-2 flex-wrap ">
      <div className="doc_finder_nav h-[10%] w-full flex gap-2  items-center justify-center flex_childred_full border-b-2">
        <div className="h-full w-1/3 items-center justify-center">
          <input
            type="text"
            className="h-1/2 w-[90%] border-2 focus:bg-gray-100 focus:outline-none"
            placeholder="Keyword eg. name or word"
            onChange={(e) => set_search_string(e.currentTarget.value)}
          />
        </div>
        <div className="h-full w-1/3 items-center justify-center gap-2">
          <input
            type="date"
            className="h-1/2 w-[90%] border-2 focus:bg-gray-100 focus:outline-none"
            placeholder="Keyword eg. name or word"
            onChange={(e) => setStartDate(e.currentTarget.value)}
            disabled
          />
          <input
            type="date"
            className="h-1/2 w-[90%] border-2 focus:bg-gray-100 focus:outline-none"
            placeholder="Keyword eg. name or word"
            onChange={(e) => setEndDate(e.currentTarget.value)}
            disabled
          />
        </div>
        <div className="h-full w-1/3 items-center justify-center">
          <button
            className="bg-white text-black p-1 w-1/2 text-xl"
            onClick={async () => await getDocuments()}
          >
            Search
          </button>
        </div>
      </div>

      <div className="h-[90%] w-full flex items-center justify-center">
        <div className="doc_finder_content w-[95%] h-full flex justify-around items-center  gap-3">
          <div className="left_content relative md: w-1/2 h-[95%] border-2">
            <div className="left_content_nav h-[15%] w-full">
              {docs_loaded ? (
                <div className="h-full w-full flex items-center justify-center flex-wrap">
                  <div className="h-1/2 w-full border-b-[1px] flex items-center justify-center">
                    <p className="text-white px-3">
                      {result_details.current +
                        " - " +
                        result_details.last +
                        " out of " +
                        result_details.total +
                        " results for " +
                        '"' +
                        search_string +
                        '"'}
                    </p>
                  </div>

                  <div className="h-1/2 w-[80%] flex items-center justify-between white_svg">
                    <div
                      className="flex cursor-pointer white_svg"
                      onClick={onPrev}
                    >
                      <p>
                        <GrFormPreviousLink className="text-2xl" />
                      </p>
                      <p className="text-white sm: hidden md:flex items-center play_font ">
                        Previus
                      </p>
                    </div>

                    <div
                      className="flex cursor-pointer white_svg"
                      onClick={onNext}
                    >
                      <p className="text-white sm: hidden md:flex  items-center play_font">
                        Next
                      </p>
                      <p>
                        <GrFormNextLink className="text-2xl" />
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full w-full flex items-center justify-center ">
                  <p className="text-white play_font">Make a search</p>
                </div>
              )}
            </div>

            <div className="h-[85%] w-full gap-1 flex flex-wrap overflow-y-scroll">
              {articles &&
                articles.map((article: any, key: number) => {
                  return (
                    <div
                      key={key}
                      id={`${article.dok_id}`}
                      onClick={article.dok_id && onOpenArticle}
                      className={`h-fit w-full border-b-2 flex items-center justify-center flex-wrap py-5 gap-5 ${
                        article.dok_id && "cursor-pointer"
                      }`}
                    >
                      <div className="w-full">
                        <p className="text-white px-3 text-sm">
                          {sanitizeString(article.titel)
                            .charAt(0)
                            .toUpperCase() +
                            sanitizeString(article.titel).slice(1)}{" "}
                          - {article.publicerad.substring(0, 10)}
                        </p>
                      </div>
                      <div className="w-[90%] h-[90%] flex items-center justify-center flex-wrap">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: sanitizeString(
                              article.summary,
                              search_string
                            ),
                          }}
                          className="w-full text-gray-400  py-5 bg-dark_blue_transparent"
                        ></div>
                      </div>

                      {article.dokumentnamn && (
                        <div className="h-fit w-full flex gap-3 px-2">
                          <p className="text-gray-400 text-sm">Dokument typ:</p>
                          <p className="text-sm text-white">
                            {article.dokumentnamn}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="right_content relative md: w-1/2 h-[95%] border-2 overflow-y-scroll">
            {loading ? (
              <div className="h-full w-full flex items-center justify-center">
                <div className="lds-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : (
              <div
                className="bg-white overflow-y-scroll"
                dangerouslySetInnerHTML={{
                  __html: article_in_view && `${article_in_view}`,
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DocFinder;
