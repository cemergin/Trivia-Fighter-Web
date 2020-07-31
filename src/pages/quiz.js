import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const QuizPage = () => {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    fetch("/.netlify/functions/questions")
      .then((response) => response.json())
      .then((resultData) => {
        setQuestions(resultData);
      });
  }, []);

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

  return (
    <Layout>
      <SEO title="Questions" />
      <h1>Test Time</h1>
      {questions
        ? questions.map((q) => {
            return (
              <div>
                <h3>{decodeURIComponent(q.category)}</h3>
                <p>{decodeURIComponent(q.question)}</p>
                <ul>
                  {shuffleAnswers(q.correct_answer, q.incorrect_answers).map(
                    (ans) => {
                      return <li>{decodeURIComponent(ans)}</li>;
                    }
                  )}
                </ul>
              </div>
            );
          })
        : null}
    </Layout>
  );
};

export default QuizPage;
