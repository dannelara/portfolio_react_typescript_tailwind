import React, { useEffect, useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import MyOwnTokenizer from "utils/tokenizer/MyOwntokenizer";
interface TokenizerProps {}

const Tokenizer: React.FC<TokenizerProps> = ({}) => {
  // let mathTokenizer: MyOwnTokenizer;
  const [mathTokenizer, set_mathTokenizer] = useState<MyOwnTokenizer>();
  const [user_input, set_user_input] = useState("");

  const [tokens_loaded, set_tokens_loaded] = useState(false);
  const [active_token, set_active_token] = useState<any>(null);
  const [error, set_error] = useState("");

  const grammar = [
    { type: "NUMBER", regExp: /^[0-9]+(\.([0-9])+)?/ },
    { type: "ADD", regExp: /^[+]/ },
    { type: "Multiply", regExp: /^[*]/ },
    { type: "divide", regExp: /^[/]/ },
    { type: "subtract", regExp: /^[-]/ },
  ];

  const onTokenizer = () => {
    set_error("");
    const tokenizer = new MyOwnTokenizer(grammar, user_input);

    set_mathTokenizer(tokenizer);
    set_tokens_loaded(true);
    // mathTokenizer = new MyOwnTokenizer(grammar, user_input);
    if (tokenizer) {
      try {
        tokenizer.loadFirstToken();
        set_active_token(tokenizer.getActiveToken());
      } catch (error: any) {
        set_error(error.message);
      }
    }
  };

  const onNext = () => {
    if (mathTokenizer) {
      try {
        mathTokenizer.setNextTokenActive();
        set_active_token(mathTokenizer.getActiveToken());
      } catch (error: any) {
        set_error(error.message);
      }
    }
  };

  const onPrev = () => {
    if (mathTokenizer) {
      mathTokenizer.setPrevTokenActive();
      set_active_token(mathTokenizer.getActiveToken());
    }
  };

  // useEffect(() => {}, [tokens_loaded]);
  // const mathTokenizer = new MyOwnTokenizer(grammar, "3.14 + 5");

  // mathTokenizer.loadFirstToken();

  // console.log(mathTokenizer.getActiveToken());
  return (
    <div className="h-full w-full flex items-center justify-center ">
      <div className="sm: w-[90%] sm: h-[90%] md:w-3/4 md:h-2/3  flex_childred_full border-2">
        <div className="h-[10%] flex items-center justify-center">
          <div className="h-fit w-full flex items-center justify-center">
            <h1 className="section_title play_font ">Tokenizer</h1>
          </div>
        </div>

        <div className="sm: h-fit md:h-[10%] w-full flex items-center justify-center">
          <div className="sm: flex-wrap w-full h-full flex items-center justify-center gap-4">
            <input
              className="input_default sm: w-[90%] md:w-3/4"
              required
              type="text"
              name="string"
              id="string"
              autoFocus
              placeholder="Enter a math expression e.g. 23 + 3"
              onChange={(e) => set_user_input(e.currentTarget.value)}
            />
            <button
              className="project_button_small text-base play_font"
              onClick={onTokenizer}
            >
              Tokenize
            </button>
          </div>
        </div>
        {tokens_loaded && (
          <div className="h-[50%] flex items-center flex-wrap gap-5">
            <div className="h-fit w-full flex items-center justify-center flex-wrap gap-2">
              <div className="h-[10%] w-[80%] flex items-center justify-between border-b-2 py-5">
                <div className="flex cursor-pointer white_svg" onClick={onPrev}>
                  <p>
                    <GrFormPreviousLink className="text-2xl" />
                  </p>
                  <p className="text-white sm: hidden md:flex items-center play_font ">
                    Previus
                  </p>
                </div>

                <p className="play_font text-white">Active Token</p>
                <div className="flex cursor-pointer white_svg" onClick={onNext}>
                  <p className="text-white sm: hidden md:flex  items-center play_font">
                    Next
                  </p>
                  <p>
                    <GrFormNextLink className="text-2xl" />
                  </p>
                </div>
              </div>

              <div className="h-fit w-[80%] flex gap-5 items-center justify-center bg-section_dark flex-wrap ">
                {active_token && (
                  <>
                    <p className="text-white uppercase">{active_token.type}</p>
                    <p className="text-white uppercase">{active_token.value}</p>
                  </>
                )}
                {error && (
                  <div className="w-full flex items-center justify-center">
                    <p className="text-red-500">{error}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="h-fit w-full text-center">
              <p className="text-white">
                This application is for testing purposes only. It uses math
                lexical grammar.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tokenizer;
