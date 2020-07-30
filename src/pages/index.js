import React from "react";
import { Link } from "gatsby";
import axios from "axios";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const makeReq = async () => {
  const res = await axios.get("/.netlify/functions/leaderboard");
  return res;
};

const IndexPage = () => {
  const { leaderboard } = makeReq();

  let scores;

  if (leaderboard) {
    scores = leaderboard.map((player) => {
      return (
        <div>
          <h3>player.name</h3>
          <span>player.score</span>
        </div>
      );
    });
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      {scores}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  );
};

export default IndexPage;
