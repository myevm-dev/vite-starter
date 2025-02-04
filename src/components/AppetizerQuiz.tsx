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

  // Generate 10 random questions with mixed question types
  const generateQuiz = () => {
    const shuffledAppetizers: ShareableAppetizer[] = shuffleArray(shareableAppetizers);
    
    const selectedQuestions = shuffledAppetizers.slice(0, 10).map((appetizer, index) => {
      const isPriceQuestion = index % 2 === 1; // 50% chance for price questions

      if (isPriceQuestion) {
        // Question: "What is the price of [Item]?"
        const correctAnswer = `$${appetizer.price.toFixed(2)}`;
        const incorrectOptions = shuffleArray(
          shareableAppetizers
            .filter((a) => a.item !== appetizer.item)
            .map((a) => `$${a.price.toFixed(2)}`)
        ).slice(0, 3);

        return {
          question: `What is the price of "${appetizer.item}"?`,
          correctAnswer,
          options: shuffleArray([...incorrectOptions, correctAnswer]),
        };
      } else {
        // Question: "Guess the Appetizer" (based on description)
        const correctAnswer = appetizer.item;
        const incorrectOptions = shuffleArray(
          shareableAppetizers
            .filter((a) => a.item !== correctAnswer)
            .map((a) => a.item)
        ).slice(0, 3);

        return {
          question: appetizer.description,
          correctAnswer,
          options: shuffleArray([...incorrectOptions, correctAnswer]),
        };
      }
    });

    setQuizQuestions(selectedQuestions);
    setQuizCompleted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
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
    <div className="w-full max-w-3xl mx-auto p-7 bg-zinc-900 text-white rounded-lg shadow-lg border-4 border-[#D0733F] scale-[1.25] text-center">
      {!quizCompleted ? (
        <>
          <h2 className="text-3xl font-bold text-[#D0733F] mb-8">
            {quizQuestions[currentQuestionIndex]?.question.includes("price") ? "How Much Does It Cost?" : "Guess the Appetizer"}
          </h2>
          <p className="text-xl mb-8">{quizQuestions[currentQuestionIndex]?.question}</p>
          <div className="grid grid-cols-2 gap-6">
            {quizQuestions[currentQuestionIndex]?.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
                className={`p-2 text-lg font-semibold rounded-lg transition border-2 border-[#D0733F] w-full ${
                  selectedAnswer
                    ? option === quizQuestions[currentQuestionIndex].correctAnswer
                      ? "bg-green-600 border-green-400"
                      : "bg-red-600 border-red-400"
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
          <h2 className="text-3xl font-bold mb-8 text-[#D0733F]">Quiz Completed!</h2>
          <p className="text-2xl mb-6">Your Score: {score} / {quizQuestions.length}</p>
          <button
            onClick={generateQuiz}
            className="px-6 py-4 bg-blue-500 rounded-lg text-white text-xl font-semibold hover:bg-blue-700"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
