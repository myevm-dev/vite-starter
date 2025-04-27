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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const choices: Choice[] = [
    { id: "sushi", text: "Sushi Rolls", category: "Sushi Rolls" },
  ];

  const handleSelect = (id: string, category: string | null) => {
    setSelected((prev) => (prev === id ? null : id));
    onSelectCategory(category);
    onProgressUpdate((choices.findIndex((choice) => choice.id === id) / choices.length) * 100);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="w-full fixed top-[80px] bg-zinc-900 text-white shadow-lg z-40">
      <div className="relative flex flex-col items-center">
        {/* Dropdown Toggle Button */}
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="w-full py-3 text-lg font-semibold"
          style={{
            backgroundColor: "#ea353d",
            borderRadius: "0.5rem",
            transition: "background 0.3s",
          }}
        >
          {selected ? choices.find((c) => c.id === selected)?.text : "Select a Category"}
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute top-12 w-full bg-zinc-800 rounded-lg shadow-lg text-white">
            {choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => handleSelect(choice.id, choice.category)}
                className="w-full px-4 py-2 text-sm text-center border-b border-zinc-700 last:border-none hover:bg-zinc-700 transition"
              >
                {choice.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
