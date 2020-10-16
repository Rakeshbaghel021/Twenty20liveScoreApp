const API_KEY = "P8aVBUexRxQIXEWAdMY0xKZCmip1";

export const getMatches = () => {
  const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err, "error");
    });
};

export const getMatchDetail = (id) => {
  const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err, "error");
    });
};
