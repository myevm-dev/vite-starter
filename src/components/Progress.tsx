import { useState } from "react";

interface Choice {
  id: string;
  text: string;
  url: string;
}

interface ProgressProps {
  onProgressUpdate: (completed: number) => void;
  onSelectCategory: (category: string | null) => void; // ✅ Ensure we notify App.tsx
}

export function Progress({ onProgressUpdate, onSelectCategory }: ProgressProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const choices: Choice[] = [
    { id: "a", text: "Appetizers", url: "/food/appetizers" },
    { id: "b", text: "Salads & Soup", url: "/food/salads" },
    { id: "c", text: "Chicken", url: "/food/chicken" },
    { id: "d", text: "Comfort Food", url: "/food/comfort" },
    { id: "e", text: "Seafood", url: "/food/seafood" },
    { id: "f", text: "Combinations", url: "/food/combinations" },
    { id: "g", text: "Steaks & Ribs", url: "/food/steaks" },
    { id: "h", text: "Sandwiches & Burgers", url: "/food/burgers" },
    { id: "i", text: "Kids", url: "/food/kids" },
    { id: "j", text: "Beverages", url: "/drinks/beverages" },
    { id: "k", text: "Cocktails", url: "/drinks/cocktails" },
    { id: "l", text: "Beers", url: "/drinks/beers" },
    { id: "m", text: "Wines", url: "/drinks/wines" },
  ];

  const handleSelect = (id: string, text: string) => {
    setSelected((prev) => (prev === id ? null : id));

    if (text === "Appetizers") {
      onSelectCategory("Appetizers"); // ✅ Triggers Appetizer Quiz
    } else {
      onSelectCategory(null); // ✅ Hides quiz when selecting other categories
    }

    onProgressUpdate(choices.findIndex((choice) => choice.id === id) / choices.length * 100);
  };

  return (
    <div className="w-full fixed top-[80px] bg-zinc-900 text-white shadow-lg z-40 flex justify-center">
      <div className="w-full flex justify-evenly gap-1 p-2">
        {choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => handleSelect(choice.id, choice.text)}
            className={`flex-grow basis-1/13 px-4 py-2 rounded-lg text-sm text-center transition border-2 border-[#D0733F] ${
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
