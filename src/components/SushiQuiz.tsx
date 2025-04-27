import { useState, useEffect } from "react";
import { sushiRolls } from "../data/food/sushi";

interface QuizQuestion {
  question: string;
  correctAnswer: string;
  options: string[];
}

interface SushiRoll {
  name: string;
  ingredients: string;
  sauces: string;
  image: string;
}

export function SushiQuiz() {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    generateQuiz();
  }, []);

  const sauceChoices = [
    "None",
    "Eel Sauce",
    "Eel Sauce and Spicy Mayo",
    "Eel Sauce, Spicy Mayo, and Sriracha",
    "Lobster Sauce",
    "Volcano Sauce",
    "Ponzu Sauce",
  ];

  const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const generateQuiz = () => {
    let shuffledSushi: SushiRoll[] = shuffleArray(sushiRolls);

    while (shuffledSushi.length < 10) {
      shuffledSushi = shuffledSushi.concat(shuffleArray(sushiRolls));
    }

    const ingredientQuestions: QuizQuestion[] = shuffledSushi.slice(0, 5).map((roll: SushiRoll) => ({
      question: `What are the ingredients in the "${roll.name}"?`,
      correctAnswer: roll.ingredients,
      options: shuffleArray(
        sushiRolls
          .filter((r: SushiRoll) => r.name !== roll.name)
          .map((r: SushiRoll) => r.ingredients)
          .slice(0, 3)
          .concat(roll.ingredients)
      ),
    }));

    const sauceQuestions: QuizQuestion[] = shuffledSushi.slice(5, 10).map((roll: SushiRoll) => {
      let correctSauce = roll.sauces.trim() || "None";

      // Normalize sauce names
      if (correctSauce.toLowerCase() === "eel sauce") {
        correctSauce = "Eel Sauce";
      } else if (correctSauce.toLowerCase().includes("spicy mayo") && correctSauce.toLowerCase().includes("sriracha")) {
        correctSauce = "Eel Sauce, Spicy Mayo, and Sriracha";
      } else if (correctSauce.toLowerCase().includes("spicy mayo")) {
        correctSauce = "Eel Sauce and Spicy Mayo";
      } else if (correctSauce.toLowerCase().includes("ponzu")) {
        correctSauce = "Ponzu Sauce";
      } else if (correctSauce.toLowerCase().includes("volcano")) {
        correctSauce = "Volcano Sauce";
      } else if (correctSauce.toLowerCase().includes("lobster")) {
        correctSauce = "Lobster Sauce";
      } else if (correctSauce === "" || correctSauce.toLowerCase() === "none") {
        correctSauce = "None";
      } else {
        correctSauce = "None"; // fallback
      }

      return {
        question: `What sauces come with the "${roll.name}"?`,
        correctAnswer: correctSauce,
        options: [...sauceChoices], // keep fixed order
      };
    });

    const finalQuestions = shuffleArray([...ingredientQuestions, ...sauceQuestions]).slice(0, 10);

    setQuizQuestions(finalQuestions);
    setQuizCompleted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
  };

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return;
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
    <div className="w-full max-w-3xl mx-auto p-7 bg-zinc-900 text-white rounded-lg shadow-lg border-4"
         style={{ borderColor: "#ea353d" }}>
      {!quizCompleted ? (
        <>
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#ea353d" }}>
            Sushi Quiz
          </h2>

          <p className="text-xl mb-8">{quizQuestions[currentQuestionIndex]?.question}</p>

          {quizQuestions[currentQuestionIndex]?.options.length === 7 ? (
            // Sauce questions layout (split 4+3)
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-4">
                {quizQuestions[currentQuestionIndex]?.options.slice(0, 4).map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswerClick(option)}
                    className={`p-3 sm:p-2 text-lg font-semibold rounded-lg transition w-full ${
                      selectedAnswer
                        ? option === quizQuestions[currentQuestionIndex].correctAnswer
                          ? "bg-green-600 border-green-400"
                          : "bg-red-600 border-red-400"
                        : "bg-zinc-800 hover:bg-zinc-700"
                    }`}
                    style={{ border: "2px solid #ea353d" }}
                    disabled={!!selectedAnswer}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                {quizQuestions[currentQuestionIndex]?.options.slice(4).map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswerClick(option)}
                    className={`p-3 sm:p-2 text-lg font-semibold rounded-lg transition w-full ${
                      selectedAnswer
                        ? option === quizQuestions[currentQuestionIndex].correctAnswer
                          ? "bg-green-600 border-green-400"
                          : "bg-red-600 border-red-400"
                        : "bg-zinc-800 hover:bg-zinc-700"
                    }`}
                    style={{ border: "2px solid #ea353d" }}
                    disabled={!!selectedAnswer}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Ingredient questions layout (normal stacked)
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {quizQuestions[currentQuestionIndex]?.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerClick(option)}
                  className={`p-3 sm:p-2 text-lg font-semibold rounded-lg transition w-full ${
                    selectedAnswer
                      ? option === quizQuestions[currentQuestionIndex].correctAnswer
                        ? "bg-green-600 border-green-400"
                        : "bg-red-600 border-red-400"
                      : "bg-zinc-800 hover:bg-zinc-700"
                  }`}
                  style={{ border: "2px solid #ea353d" }}
                  disabled={!!selectedAnswer}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <div>
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#ea353d" }}>
            Quiz Completed!
          </h2>
          <p className="text-2xl mb-6">
            Your Score: {score} / {quizQuestions.length}
          </p>
          <button
            onClick={generateQuiz}
            className="px-6 py-4 rounded-lg text-white text-xl font-semibold transition"
            style={{
              backgroundColor: "#ea353d",
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
