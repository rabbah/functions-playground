const fetch = require("axios");

const API_ENDPOINT = "https://icanhazdadjoke.com/";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { Accept: "application/json" } })
    .then((response) => response.data)
    .then((data) => ({
      statusCode: 200,
      body: data.joke,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
