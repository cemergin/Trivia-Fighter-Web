const { query } = require("./util/hasuraQuery");
const { Validator } = require("node-input-validator");

exports.handler = async (event) => {
  //console.log(event);

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "This was not a POST request!",
      headers: { Allow: "POST" },
    };
  }

  const body = JSON.parse(event.body);

  console.log(body);

  const { name, score } = body;
  const validator = new Validator(body, {
    name: "required|string|length:2,12",
    score: "required|integer|min:0",
  });

  const matched = await validator.check();

  if (event.body == null || name == null || score == null || !matched) {
    return {
      statusCode: 400,
      body: !matched ? v.errors : "Invalid Input!",
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
