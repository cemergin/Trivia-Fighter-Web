import React, { useEffect, useState } from "react";

const Question = ({
  number,
  timer,
  category,
  difficulty,
  question,
  answers,
  onChange,
  onSubmit,
  onNext,
  round,
}) => {
  const mapAnswers = (answers) => {
    return answers.map((ans, ind) => {
      return (
        <div key={ind}>
          <input type="radio" id={ind} name="question" value={ans} />
          <label htmlFor={ind}>{ans}</label>
        </div>
      );
    });
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Round #{number}</h3>
        <h3>{timer} second(s)</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3> Category: {category}</h3>
        <h3 style={{ textTransform: "capitalize" }}>{difficulty}</h3>
      </div>
      <p> {question}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
        onChange={onChange}
      >
        {mapAnswers(answers)}
      </div>
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
          style={{ width: "20vw" }}
          disabled={!round}
          onClick={() => {
            onSubmit();
          }}
        >
          Submit
        </button>
        <button
          style={{ width: "20vw" }}
          disabled={round}
          onClick={() => {
            onNext();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Question;
