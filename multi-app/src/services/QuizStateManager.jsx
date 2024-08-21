import { useState } from 'react';

const QuizStateManager = ({ questions, renderQuiz }) => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
  
    const handleAnswer = (answer) => {
      if (answer === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setIsQuizFinished(true);
      }
    };
  
    const resetQuiz = () => {
      setScore(0);
      setCurrentQuestion(0);
      setIsQuizFinished(false);
    };
  
    return renderQuiz({
      score,
      currentQuestion,
      handleAnswer,
      question: questions[currentQuestion],
      isQuizFinished,
      resetQuiz,
    });
  };
  
export default QuizStateManager;
  
  
