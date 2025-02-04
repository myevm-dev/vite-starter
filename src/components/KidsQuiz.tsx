import { useState, useEffect } from "react";
import { kidsMeals, KidsMeal } from "../data/food/kids";

interface QuizQuestion {
  question: string;
  correctAnswer: string;
  options: string[];
}

export function KidsQuiz() {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  useEffect(() => {
    generateQuiz();
  }, []);

  const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const generateQuiz = () => {
    const shuffledKidsMeals = shuffleArray(kidsMeals);

    let descriptionQuestions: QuizQuestion[] = [];
    let priceQuestion: QuizQuestion | null = null;

    // Generate 5 description-based questions
    for (let meal of shuffledKidsMeals) {
      if (descriptionQuestions.length < 5) {
        const correctAnswer = meal.item;
        const incorrectOptions = shuffleArray(
          shuffledKidsMeals
            .filter((m) => m.item !== correctAnswer)
            .map((m) => m.item)
        ).slice(0, 3);

        descriptionQuestions.push({
          question: meal.description,
          correctAnswer,
          options: shuffleArray([...incorrectOptions, correctAnswer]),
        });

        if (descriptionQuestions.length === 5) break;
      }
    }

    // Single price question (All meals are the same price)
    const correctPrice = `$6.49`;
    const incorrectPrices = ["$5.99", "$6.99", "$7.49"];
    
    priceQuestion = {
      question: "How much are kids meals?",
      correctAnswer: correctPrice,
      options: shuffleArray([...incorrectPrices, correctPrice]),
    };

    const finalQuestions = shuffleArray([priceQuestion, ...descriptionQuestions]);

    setQuizQuestions(finalQuestions);
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
            {quizQuestions[currentQuestionIndex]?.question.includes("How much")
              ? "How Much Does a Kids Meal Cost?"
              : "Guess the Kids Meal"}
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
