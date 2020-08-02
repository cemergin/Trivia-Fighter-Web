import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Question from "../components/Quiz/question";
import GameOver from "../components/Quiz/gameOver";

import { navigate } from "@reach/router";

const shuffleAnswers = (correct, incorrect) => {
  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  let final = [];

  final.push(...incorrect);
  final.push(correct);

  return shuffle(final);
};

const handleSubmit = async (name, score) => {
  await fetch("/.netlify/functions/insertScore", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      score,
    }),
  });
};

const QuizPage = () => {
  const numberOfQuestions = 20;
  const [questions, setQuestions] = useState(null);
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [round, setRound] = useState(false);
  const roundDuration = 10;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerSelected, setAnswerSelected] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    if (!start) {
      fetch(`/.netlify/functions/questions?count=${numberOfQuestions}`)
        .then((response) => response.json())
        .then((resultData) => {
          const processedData = resultData.map((data) => {
            const correct = decodeURIComponent(data.correct_answer);
            const incorrect = data.incorrect_answers.map((choice) => {
              return decodeURIComponent(choice);
            });
            const shuffled = shuffleAnswers(correct, incorrect);
            return {
              ...data,
              question: decodeURIComponent(data.question),
              category: decodeURIComponent(data.category),
              correct_answer: correct,
              answers: shuffled,
            };
          });
          setQuestions(processedData);
          setTimer(10);
          setStart(true);
          setRound(true);
        });
    }
  }, [start]);

  useEffect(() => {
    if (start && !end) {
      if (round) {
        if (timer <= 0) {
          onRoundEnd();
          return;
        } else {
          const interval = setInterval(() => {
            setTimer(timer - 1);
          }, 1000);

          return () => clearInterval(interval);
        }
      }
    }
  }, [start, round, timer]);

  const calculateScore = (difficulty) => {
    if (difficulty === "easy") return 100;
    if (difficulty === "medium") return 200;
    if (difficulty === "hard") return 500;
    return 0;
  };

  const onChange = (event) => {
    setAnswerSelected(event.target.value);
  };

  const onRoundEnd = (event) => {
    setRound(false);
    if (checkAnswer()) {
      setScore(score + calculateScore(questions[questionIndex].difficulty));
    } else {
      onEndGame();
    }
  };

  const onEndGame = () => {
    setEnd(true);
  };

  const clearRadioButtons = (name) => {
    const element = document.getElementsByName(name);
    element.forEach((e) => {
      e.checked = false;
    });
  };

  const onNext = (event) => {
    if (round + 1 === numberOfQuestions) {
      onEndGame();
    } else {
      setQuestionIndex(questionIndex + 1);
      clearRadioButtons("question");
      setAnswerSelected("");
      setRound(true);
      setTimer(timer + roundDuration);
    }
  };

  const checkAnswer = () => {
    return answerSelected === questions[questionIndex].correct_answer
      ? true
      : false;
  };

  const onType = (event) => {
    setNickname(event.target.value);
  };

  const onSend = () => {
    handleSubmit(nickname, score);
    navigate("/leaderboard");
  };

  const onTryAgain = () => {
    window.location.reload();
    return false;
  };

  return (
    <Layout>
      <SEO title="Fight" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1> {start ? (end ? "Game Over" : "Fight!") : "Inserting Coin"}</h1>
        <h2>Score: {score}</h2>
      </div>
      {start ? (
        end ? (
          <GameOver
            onType={onType}
            onSend={onSend}
            disableSend={nickname.length < 4}
            onTryAgain={onTryAgain}
            score={score}
          ></GameOver>
        ) : (
          <Question
            key={questionIndex}
            number={questionIndex + 1}
            timer={timer}
            category={questions[questionIndex].category}
            difficulty={questions[questionIndex].difficulty}
            question={questions[questionIndex].question}
            answers={questions[questionIndex].answers}
            onChange={onChange}
            onSubmit={onRoundEnd}
            onNext={onNext}
            round={round}
          ></Question>
        )
      ) : (
        <h3>Loading...</h3>
      )}
    </Layout>
  );
};

export default QuizPage;

// questions[questionIndex] ? (

// ) : (
//   <h3>Loading...</h3>
