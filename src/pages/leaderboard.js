import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import LeaderboardComponent from "../components/leaderboard";

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState(null);

  useEffect(() => {
    fetch("/.netlify/functions/leaderboard")
      .then((response) => response.json())
      .then((resultData) => {
        setLeaderboard(resultData.leaderboard);
      });
  }, []);

  return (
    <Layout>
      <SEO title="Leaderboard" />
      <section>
        <h1>Leaderboard</h1>
        <LeaderboardComponent players={leaderboard}></LeaderboardComponent>
      </section>
      <section style={{ marginTop: "3vh" }}>
        <div>
          <Link style={{ textDecoration: "none" }} to="/play">
            <h3>Play Now</h3>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default LeaderboardPage;
