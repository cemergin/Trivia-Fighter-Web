import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <Image></Image>
        <h1>Are you ready to fulfill your destiny?</h1>
        <h4>Become the greatest trivia fighter of all time!</h4>
        <div
          style={{
            marginBottom: "1vh",
          }}
        >
          <div>
            <Link style={{ textDecoration: "none" }} to="/leaderboard">
              <h3>Leaderboard</h3>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to="/play">
              <h3>Play</h3>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>How to Play</h1>
          <h4>Stay in the fight</h4>
          <p>
            Trivia Fighter Turbo presents you arcade style trivia in a web
            browser! Compete in upto 20 rounds of multiple choice questions to
            get the highest score and put your name on the leaderboard.
          </p>
          <p> Game is over if you guess wrong or if you run out of time.</p>
          <p>
            Trivia Fighter Turbo gets its questions from{" "}
            <a style={{ textDecoration: "none" }} href="https://opentdb.com/">
              Open Trivia DB
            </a>
            {". "}
            Be prepared for questions from +20 categories!
          </p>
          <h4>Stronger the opponent, bigger the prize</h4>
          <p>
            Questions come at random difficulty levels, at every new round.
            Fortune might favor you with a flurry of easy questions or one
            difficult opponent might be your end. On the bright side, harder
            questions yield more points!
          </p>
          <p>
            <strong>Easy</strong> = 100 Points
          </p>
          <p>
            <strong>Medium</strong> = 200 Points
          </p>
          <p>
            <strong>Hard</strong> = 500 Points
          </p>
          <h4>Keep an eye out for time</h4>
          <p>
            Every round 10 more seconds are added to your timer. If the timer
            runs out before you can answer a question, game is over. Use the
            time wisely if you want to reach the top!
          </p>
          <h4>Make History</h4>
          <p>
            Beat other fighters' scores to put your name on the map. Check the
            leaderboard frequently to see if you still qualify for the top 10.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
