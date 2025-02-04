import { useState, useEffect } from "react";
import { shareableAppetizers, ShareableAppetizer } from "../data/food/sharableAppetizers";

interface QuizQuestion {
  question: string;
  correctAnswer: string;
  options: string[];
}

export function AppetizerQuiz() {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    generateQuiz();
  }, []);

  // Function to shuffle an array (Fisher-Yates Algorithm)
  const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Generate 5 random questions
  const generateQuiz = () => {
    const shuffledAppetizers: ShareableAppetizer[] = shuffleArray(shareableAppetizers);
    const selectedQuestions = shuffledAppetizers.slice(0, 5).map((appetizer) => {
      const correctAnswer = appetizer.item;
      const incorrectOptions = shuffleArray(
        shareableAppetizers
          .filter((a) => a.item !== correctAnswer) // Exclude correct answer
          .map((a) => a.item) // Get only item names
      ).slice(0, 3); // Pick 3 incorrect answers
      return {
        question: appetizer.description, // ✅ Fix: Now correctly using description
        correctAnswer,
        options: shuffleArray([...incorrectOptions, correctAnswer]), // ✅ Ensures correct answer is included
      };
    });
    setQuizQuestions(selectedQuestions);
  };

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => {
      if (currentQuestionIndex + 1 < quizQuestions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
      } else {
        setQuizCompleted(true);
      }
    }, 1000);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-zinc-900 text-white rounded-lg shadow-lg">
      {!quizCompleted ? (
        <>
          <h2 className="text-xl font-bold mb-4">Guess the Appetizer</h2>
          <p className="text-md mb-4">{quizQuestions[currentQuestionIndex]?.question}</p>
          <div className="grid grid-cols-2 gap-2">
            {quizQuestions[currentQuestionIndex]?.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
                className={`p-2 rounded-lg transition text-white ${
                  selectedAnswer
                    ? option === quizQuestions[currentQuestionIndex].correctAnswer
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-zinc-800 hover:bg-zinc-700"
                }`}
                disabled={!!selectedAnswer}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg">Your Score: {score} / {quizQuestions.length}</p>
          <button
            onClick={generateQuiz}
            className="mt-4 p-3 bg-blue-500 rounded-lg text-white hover:bg-blue-700"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
