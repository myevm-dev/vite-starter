import { useState, useEffect } from "react";
import { steakAndRibsDishes, SteakRibsDish } from "../data/food/steakAndRibs";

interface QuizQuestion {
  question: string;
  correctAnswer: string;
  options: string[];
}

export function SteakAndRibsQuiz() {
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
    const shuffledSteakAndRibs = shuffleArray(steakAndRibsDishes);
    const shuffledForPrice = shuffleArray(steakAndRibsDishes);

    let descriptionQuestions: QuizQuestion[] = [];
    let priceQuestions: QuizQuestion[] = [];

    // Generate 5 description-based questions
    for (let dish of shuffledSteakAndRibs) {
      if (descriptionQuestions.length < 5) {
        const correctAnswer = dish.item;
        const incorrectOptions = shuffleArray(
          steakAndRibsDishes
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
            steakAndRibsDishes
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
    <div className="w-full max-w-3xl mx-auto p-7 bg-zinc-900 text-white rounded-lg shadow-lg border-4 border-[#D0733F] scale-[1.25] text-center">
      {!quizCompleted ? (
        <>
          <h2 className="text-3xl font-bold text-[#D0733F] mb-8">
            {quizQuestions[currentQuestionIndex]?.question.includes("price")
              ? "How Much Does It Cost?"
              : "Guess the Steak or Ribs Dish"}
          </h2>
          <p className="text-xl mb-8">{quizQuestions[currentQuestionIndex]?.question}</p>

          {/* ✅ Fixed: Only rendering the shuffled answer options */}
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
