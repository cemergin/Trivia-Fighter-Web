const axios = require("axios");

const query = async ({ query, variables = {} }) => {
  const result = await axios.post(
    process.env.HASURA_API_URL,
    JSON.stringify({ query, variables }),
    {
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET,
      },
    }
  );

  return result.data;
};

exports.query = query;
