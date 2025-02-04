import { useState, useEffect } from "react";
import { salads, soups, Salad, Soup } from "../data/food/saladsAndSoup";

interface QuizQuestion {
  question: string;
  correctAnswer: string;
  options: string[];
}

export function SaladSoupQuiz() {
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
    const combinedItems = shuffleArray([...salads, ...soups]);

    let descriptionQuestions: QuizQuestion[] = [];
    let priceQuestions: QuizQuestion[] = [];

    // Get exactly 5 description questions
    for (let item of combinedItems) {
      if (descriptionQuestions.length < 5) {
        const correctAnswer = item.item;
        const incorrectOptions = shuffleArray(
          combinedItems
            .filter((i) => i.item !== correctAnswer)
            .map((i) => i.item)
        ).slice(0, 3);

        descriptionQuestions.push({
          question: item.description,
          correctAnswer,
          options: shuffleArray([...incorrectOptions, correctAnswer]),
        });

        if (descriptionQuestions.length === 5) break;
      }
    }

    // Get exactly 3 price questions
    for (let item of combinedItems) {
      if (priceQuestions.length < 3) {
        let correctAnswer: string = "";
        let incorrectOptions: string[] = [];

        if (typeof item.price === "number") {
          correctAnswer = `$${item.price.toFixed(2)}`;

          if (item.wrongPrices && Array.isArray(item.wrongPrices)) {
            incorrectOptions = shuffleArray(
              item.wrongPrices.map((price) => `$${price.toFixed(2)}`)
            ).slice(0, 3);
          }
        } else if (
          item.price &&
          typeof item.price === "object" &&
          "bowl" in item.price &&
          "cup" in item.price
        ) {
          correctAnswer = `Bowl: $${item.price.bowl.toFixed(2)}, Cup: $${item.price.cup.toFixed(2)}`;

          if (
            item.wrongPrices &&
            typeof item.wrongPrices === "object" &&
            "bowl" in item.wrongPrices &&
            "cup" in item.wrongPrices
          ) {
            const bowlPrices = Array.isArray(item.wrongPrices.bowl) ? item.wrongPrices.bowl : [];
            const cupPrices = Array.isArray(item.wrongPrices.cup) ? item.wrongPrices.cup : [];

            incorrectOptions = shuffleArray(
              bowlPrices.map(
                (bowlPrice, index) =>
                  `Bowl: $${bowlPrice.toFixed(2)}, Cup: $${cupPrices[index]?.toFixed(2) || "?"}`
              )
            ).slice(0, 3);
          }
        }

        if (correctAnswer !== "" && incorrectOptions.length === 3) {
          priceQuestions.push({
            question: `What is the price of "${item.item}"?`,
            correctAnswer,
            options: shuffleArray([...incorrectOptions, correctAnswer]),
          });
        }

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
            {quizQuestions[currentQuestionIndex]?.question.includes("price") ? "How Much Does It Cost?" : "Guess the Salad or Soup"}
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
