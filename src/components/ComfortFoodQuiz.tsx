import { useState, useEffect } from "react";
import { comfortFoodDishes, ComfortFood } from "../data/food/comfortfood";

interface QuizQuestion {
  question: string;
  correctAnswer: string;
  options: string[];
  img?: string;
}

export function ComfortFoodQuiz() {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    generateQuiz();
  }, []);

  const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const generateQuiz = () => {
    let shuffledComfortFood: ComfortFood[] = shuffleArray(comfortFoodDishes);

    while (shuffledComfortFood.length < 8) {
      shuffledComfortFood = shuffledComfortFood.concat(shuffleArray(comfortFoodDishes));
    }

    // ✅ Description-Based Questions (Shows only text, asks for item name)
    const descriptionQuestions = shuffledComfortFood.slice(0, 3).map((dish) => ({
      question: dish.description,
      correctAnswer: dish.item,
      img: undefined, // No image for these questions
      options: shuffleArray(
        comfortFoodDishes
          .filter((d) => d.item !== dish.item)
          .map((d) => d.item)
          .slice(0, 3)
          .concat(dish.item)
      ),
    }));

    // ✅ Price-Based Questions (Shows item name + image, asks for price)
    const priceQuestions = shuffledComfortFood.slice(3, 5).map((dish) => ({
      question: `How much does "${dish.item}" cost?`,
      correctAnswer: `$${dish.price.toFixed(2)}`,
      img: dish.img, // Show image for price questions
      options: shuffleArray(
        dish.wrongPrices
          ? dish.wrongPrices.map((price) => `$${price.toFixed(2)}`).slice(0, 3).concat(`$${dish.price.toFixed(2)}`)
          : comfortFoodDishes
              .filter((d) => d.item !== dish.item)
              .map((d) => `$${d.price.toFixed(2)}`)
              .slice(0, 3)
              .concat(`$${dish.price.toFixed(2)}`)
      ),
    }));

    // ✅ Image-Based Questions (Shows only image, asks "What is this dish?")
    const imageQuestions = shuffledComfortFood.slice(5, 8).map((dish) => ({
      question: "What is this dish?",
      correctAnswer: dish.item,
      img: dish.img, // Show image for these questions
      options: shuffleArray(
        comfortFoodDishes
          .filter((d) => d.item !== dish.item)
          .map((d) => d.item)
          .slice(0, 3)
          .concat(dish.item)
      ),
    }));

    const finalQuestions = shuffleArray([...descriptionQuestions, ...priceQuestions, ...imageQuestions]).slice(0, 8);

    setQuizQuestions(finalQuestions);
    setQuizCompleted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
  };

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return; // Prevent multiple selections
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
    <div className="w-full max-w-3xl mx-auto p-7 bg-zinc-900 text-white rounded-lg shadow-lg border-4 border-[#D0733F] scale-[1.1] sm:scale-[1.25] text-center mt-20">
      {!quizCompleted ? (
        <>
          <h2 className="text-3xl font-bold text-[#D0733F] mb-8">
            {quizQuestions[currentQuestionIndex]?.img
              ? quizQuestions[currentQuestionIndex]?.question.includes("cost")
                ? "How Much Does It Cost?"
                : "What is this dish?"
              : "Guess the Comfort Food Dish"}
          </h2>

          {/* ✅ Show Image ONLY for Price & Image-Based Questions */}
          {quizQuestions[currentQuestionIndex]?.img && (
            <img
              src={quizQuestions[currentQuestionIndex].img}
              alt="Dish"
              className="mb-4 w-full max-w-xs mx-auto rounded-lg shadow-md"
            />
          )}

          <p className="text-xl mb-8">{quizQuestions[currentQuestionIndex]?.question}</p>

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
