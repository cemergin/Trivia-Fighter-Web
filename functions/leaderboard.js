const { query } = require("./util/hasuraQuery");

exports.handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: "This was not a GET request!",
    };
  }

  let result;

  try {
    result = await query({
      query: `
    query {
      leaderboard(order_by: {score: desc}, limit: 10) {
        name
        score
      }
    }
    `,
    });
  } catch (err) {
    let message = err.message;

    console.error(message);

    return {
      statusCode: 424,
      body: JSON.stringify({
        status: "failed",
        message,
      }),
    };
  }

  const status = result === null ? "failed" : "success";

  console.log(JSON.stringify({ status, leaderboard: result.data.leaderboard }));

  return {
    statusCode: 200,
    body: JSON.stringify({ status, leaderboard: result.data.leaderboard }),
  };
};
