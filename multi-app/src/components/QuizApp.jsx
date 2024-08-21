import styled from 'styled-components';
import QuizStateManager from '../services/QuizStateManager';
import { useEffect } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 50px auto;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const Question = styled.p`
  color: #555;
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const OptionButton = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    background-color: #004494;
    transform: scale(0.95);
  }
`;

const Score = styled.p`
  color: #333;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`;

const RetryButton = styled.button`
  padding: 12px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }

  &:active {
    background-color: #1e7e34;
    transform: scale(0.95);
  }
`;

const questions = [
  {
    question: "What is 2+2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "What is 3+3?",
    options: ["5", "6", "7", "8"],
    answer: "6",
  },
];

const QuizApp = () => {
  return (
    <QuizStateManager
      questions={questions}
      renderQuiz={({ question, handleAnswer, isQuizFinished, score, resetQuiz }) => (
        <Container>
          <Title>Quiz App</Title>
          {!isQuizFinished ? (
            <div>
              <Question>{question.question}</Question>
              {question.options.map((option) => (
                <OptionButton key={option} onClick={() => handleAnswer(option)}>
                  {option}
                </OptionButton>
              ))}
            </div>
          ) : (
            <>
              <Score>Your score: {score}</Score>
              <RetryButton onClick={resetQuiz}>Repetir</RetryButton> {/* Botão para repetir o quiz */}
            </>
          )}
        </Container>
      )}
    />
  );
};

export default QuizApp;