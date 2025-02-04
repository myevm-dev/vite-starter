import { useState } from "react";

interface Choice {
  id: string;
  text: string;
  category: string | null;
}

interface ProgressProps {
  onProgressUpdate: (completed: number) => void;
  onSelectCategory: (category: string | null) => void;
}

export function Progress({ onProgressUpdate, onSelectCategory }: ProgressProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const choices: Choice[] = [
    { id: "a", text: "Appetizers", category: "Appetizers" },
    { id: "b", text: "Salads & Soup", category: "Salads & Soup" },
    { id: "c", text: "Chicken", category: null },
    { id: "d", text: "Comfort Food", category: null },
    { id: "e", text: "Seafood", category: null },
    { id: "f", text: "Combinations", category: null },
    { id: "g", text: "Steaks & Ribs", category: null },
    { id: "h", text: "Sandwiches & Burgers", category: null },
    { id: "i", text: "Kids", category: null },
    { id: "j", text: "Beverages", category: null },
    { id: "k", text: "Cocktails", category: null },
    { id: "l", text: "Beers", category: null },
    { id: "m", text: "Wines", category: null },
  ];

  const handleSelect = (id: string, category: string | null) => {
    setSelected((prev) => (prev === id ? null : id));
    onSelectCategory(category);
    onProgressUpdate((choices.findIndex((choice) => choice.id === id) / choices.length) * 100);
  };

  return (
    <div className="w-full fixed top-[80px] bg-zinc-900 text-white shadow-lg z-40 flex justify-center">
      <div className="w-full flex justify-evenly gap-1 p-2">
        {choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => handleSelect(choice.id, choice.category)}
            className={`flex-grow basis-1/13 px-4 py-2 rounded-lg text-sm text-center transition border-2 border-[#c16436] ${
              selected === choice.id
                ? "bg-blue-500 text-white"
                : "bg-zinc-800 hover:bg-zinc-700"
            }`}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}
