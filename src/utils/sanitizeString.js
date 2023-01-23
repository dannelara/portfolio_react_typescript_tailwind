export default (str, searchString) => {
  if (str === null || str === "") return false;
  else str = str.toString();

  if (!searchString) {
    return str.replace(/(<([^>]+)>)/gi, "").toLowerCase();
  } else {
    let result = "";

    const keyWords = searchString.split(" ");
    const replacedString = str.replace(/(<([^>]+)>)/gi, "").toLowerCase();

    const splitted = replacedString.split(" ");

    for (const keyWord of keyWords) {
      const regex = new RegExp(`^${keyWord.toLowerCase()}`);
      for (const word of splitted) {
        if (word.match(regex)) {
          result += `<p class="query_marker"> ${word} </p>`;
        } else {
          result += word;
        }
        result += " ";
      }
    }

    return result;
  }
};
