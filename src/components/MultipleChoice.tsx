import { useState } from "react";

interface MultipleChoiceProps {
  type: "food" | "drink";
}

export function MultipleChoice({ type }: MultipleChoiceProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const choices = {
    food: [
      { id: "a", text: "Best Appetizers", url: "/food/appetizers" },
      { id: "b", text: "Favorite Main Course", url: "/food/main" },
      { id: "c", text: "Sweetest Dessert", url: "/food/desserts" },
    ],
    drink: [
      { id: "a", text: "Best Cocktail", url: "/drinks/cocktails" },
      { id: "b", text: "Favorite Beer", url: "/drinks/beers" },
      { id: "c", text: "Top Wine Choice", url: "/drinks/wines" },
    ],
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">{type === "food" ? "Food Quiz" : "Drink Quiz"}:</h2>
      <div className="space-y-2">
        {choices[type].map((choice) => (
          <button
            key={choice.id}
            onClick={() => setSelected(choice.id)}
            className={`w-full p-3 border rounded-lg transition ${
              selected === choice.id ? "bg-blue-500 text-white" : "bg-zinc-900 text-gray-300 hover:bg-zinc-800"
            }`}
          >
            <a href={choice.url}>{choice.text}</a>
          </button>
        ))}
      </div>
    </div>
  );
}
