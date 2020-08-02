import React, { useState, useEffect } from "react";
import Image from "./winnerImage";
import LoserImage from "./loserImage";

const GameOver = ({ onType, onSend, onTryAgain, score, disableSend }) => {
  const [highScores, setHighScores] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch("/.netlify/functions/leaderboard")
      .then((response) => response.json())
      .then((resultData) => {
        setHighScores(resultData.leaderboard);
        setLoad(true);
        console.log(resultData.leaderboard);
      });
  }, []);

  return (
    <div onChange={onType}>
      {load && highScores && highScores[highScores.length - 1].score < score ? (
        <>
          <Image></Image>
          <p style={{ textAlign: "center" }}></p>
          <input
            style={{
              width: "100%",
              textAlign: "center",
              display:
                load && highScores[highScores.length - 1].score < score
                  ? "block"
                  : "none",
            }}
            placeholder="Put Your Name in History"
            type="text"
          ></input>
        </>
      ) : (
        <>
          <LoserImage></LoserImage>
        </>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "3vh",
          marginBottom: "3vh",
        }}
      >
        <button
          style={{
            width: "20vw",
            display:
              load &&
              highScores &&
              highScores[highScores.length - 1].score < score
                ? "block"
                : "none",
          }}
          disabled={disableSend}
          onClick={onSend}
        >
          Share Score
        </button>
        <button style={{ width: "20vw" }} onClick={onTryAgain}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
