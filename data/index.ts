export const fetchSummary = async (articleUrl: string) => {
  const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${articleUrl}&length=3`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5257834396msheeafefe006a2c5bp12a68ejsnd4b10c39547e",
      "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  };

  let result;

    await fetch(url, options).then(res => {
      result = res.json()
    }).catch(err => {
      result = {
        summary: err
      }
    })

  return result;
};
