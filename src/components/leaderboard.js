import React from "react";

const leaderboard = ({ players }) => {
  return (
    <div style={{ background: "#eee", borderRadius: "4px" }}>
      {players ? (
        <div style={{ padding: "2vh" }}>
          {players.map((player) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "stretch",
                }}
              >
                <h3>{player.name}</h3>
                <h3>{player.score}</h3>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading Leaderboard...</div>
      )}
    </div>
  );
};

export default leaderboard;
