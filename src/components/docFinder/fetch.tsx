export async function fetchArticles(
  nextUrl: String,
  keyword: String,
  page: number,
  filter_options?: { start: any; end: any }
) {
  const currentPage = page ? page : 1;

  keyword = keyword.replace(" ", "+");

  let url: URL;

  if (!nextUrl) {
    url = new URL(
      `https://data.riksdagen.se/dokumentlista/?sok=${keyword}&doktyp=&rm=&from=${filter_options?.start}&tom=${filter_options?.end}&ts=&bet=&tempbet=&nr=&org=&iid=&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=&sortorder=desc&rapport=&utformat=json&a=s&p=${page}`
    );
  } else {
    url = new URL(`${nextUrl}`);
  }

  try {
    const response = await fetch(new URL(url));
    const answer = await response.json();
    return answer;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchFullArticle(id: String) {
  const url = `//data.riksdagen.se/dokument/${id}.html`;

  const response = await fetch(url);

  const answer = await response.text();

  return answer;
}
