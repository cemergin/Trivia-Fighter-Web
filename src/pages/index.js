import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const handleSubmit = async (event) => {
  fetch("/.netlify/functions/insertScore", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "cemm",
      score: "100",
    }),
  }).then((response) => console.log(response));
};

const IndexPage = () => {
  const [leaderboard, setLeaderboard] = useState(null);

  useEffect(() => {
    fetch("/.netlify/functions/leaderboard")
      .then((response) => response.json())
      .then((resultData) => {
        setLeaderboard(resultData.leaderboard);
      });
    handleSubmit();
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      {leaderboard
        ? leaderboard.map((player) => {
            return (
              <div>
                <h3>{player.name}</h3>
                <h4>{player.score}</h4>
              </div>
            );
          })
        : null}
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  );
};

export default IndexPage;
