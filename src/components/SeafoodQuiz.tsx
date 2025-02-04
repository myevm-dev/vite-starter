import { useState, useEffect } from "react";
import { seafoodDishes, SeafoodDish } from "../data/food/seafood";

interface QuizQuestion {
  question: string;
  correctAnswer: string;
  options: string[];
}

export function SeafoodQuiz() {
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
    const shuffledSeafood = shuffleArray(seafoodDishes);
    const shuffledForPrice = shuffleArray(seafoodDishes);

    let descriptionQuestions: QuizQuestion[] = [];
    let priceQuestions: QuizQuestion[] = [];

    // Generate 5 description-based questions
    for (let dish of shuffledSeafood) {
      if (descriptionQuestions.length < 5) {
        const correctAnswer = dish.item;
        const incorrectOptions = shuffleArray(
          seafoodDishes
            .filter((d) => d.item !== correctAnswer)
            .map((d) => d.item)
        ).slice(0, 3);

        descriptionQuestions.push({
          question: dish.description,
          correctAnswer,
          options: shuffleArray([...incorrectOptions, correctAnswer]),
        });

        if (descriptionQuestions.length === 5) break;
      }
    }

    // Generate 3 price-based questions
    for (let dish of shuffledForPrice) {
      if (priceQuestions.length < 3) {
        let correctAnswer: string = `$${dish.price.toFixed(2)}`;
        let incorrectOptions: string[] = [];

        if (dish.wrongPrices) {
          incorrectOptions = shuffleArray(
            dish.wrongPrices.map((price) => `$${price.toFixed(2)}`)
          ).slice(0, 3);
        } else {
          incorrectOptions = shuffleArray(
            seafoodDishes
              .filter((d) => d.item !== dish.item)
              .map((d) => `$${d.price.toFixed(2)}`)
          ).slice(0, 3);
        }

        priceQuestions.push({
          question: `What is the price of "${dish.item}"?`,
          correctAnswer,
          options: shuffleArray([...incorrectOptions, correctAnswer]),
        });

        if (priceQuestions.length === 3) break;
      }
    }

    const finalQuestions = shuffleArray([...descriptionQuestions, ...priceQuestions]);

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
    <div className="w-full max-w-3xl mx-auto p-6 bg-zinc-900 text-white rounded-lg shadow-lg border-4 border-[#D0733F] scale-[1.1] sm:scale-[1.25] text-center">
      {!quizCompleted ? (
        <>
          <h2 className="text-3xl font-bold text-[#D0733F] mb-6">
            {quizQuestions[currentQuestionIndex]?.question.includes("price")
              ? "How Much Does It Cost?"
              : "Guess the Seafood Dish"}
          </h2>
          <p className="text-xl mb-6">{quizQuestions[currentQuestionIndex]?.question}</p>

          {/* ✅ Responsive Answer Layout (List on Mobile, Grid on Larger Screens) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {quizQuestions[currentQuestionIndex]?.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
                className={`p-3 sm:p-2 text-lg font-semibold rounded-lg transition border-2 border-[#D0733F] w-full ${
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
          <p className="text-2xl mb-6">
            Your Score: {score} / {quizQuestions.length}
          </p>
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
