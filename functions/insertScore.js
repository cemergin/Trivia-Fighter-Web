const { query } = require("./util/hasuraQuery");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "This was not a POST request!",
      headers: { Allow: "POST" },
    };
  }

  const body = JSON.parse(event.body);
  const { name, score } = body;

  if (event.body == null || name == null || score == null) {
    return {
      statusCode: 400,
      body: "Invalid Input!",
    };
  }

  let result;

  try {
    result = await query({
      query: `
      mutation ($name: String!, $score: Int!) {
        insert_leaderboard_one(object: {name: $name, score: $score}, 
          on_conflict: {update_columns: [score, time], constraint: leaderboard_pkey}) {
          name
          score
        }
      }
    `,
      variables: { name, score },
    });
  } catch (err) {
    let message = err.message;

    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "Database failed",
        message,
      }),
    };
  }

  console.log(JSON.stringify(result.data));

  return {
    statusCode: 200,
    body: JSON.stringify(result.data),
  };
};
