const axios = require("axios");
exports.handler = async (event) => {
  const count = event.queryStringParameters.count
    ? event.queryStringParameters.count
    : 10;

  const result = await axios.get(
    `https://opentdb.com/api.php?amount=${count}&type=multiple&encode=url3986`
  );

  return {
    statusCode: 200,
    body: JSON.stringify(result.data.results),
  };
};
