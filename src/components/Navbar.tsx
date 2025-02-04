import { ConnectButton } from "thirdweb/react";
import { client } from "../client";

interface NavbarProps {
  setQuizType: (type: "food" | "drink") => void;
  quizType: "food" | "drink";
}

export function Navbar({ setQuizType, quizType }: NavbarProps) {
  return (
    <nav className="w-full fixed top-0 left-0 bg-zinc-900 text-white p-4 flex justify-between items-center shadow-lg z-50">
      <div className="flex space-x-6">
        <button
          onClick={() => setQuizType("food")}
          className={`px-4 py-2 rounded-lg transition ${
            quizType === "food" ? "bg-blue-500 text-white" : "hover:bg-zinc-800"
          }`}
        >
          Food
        </button>
        <button
          onClick={() => setQuizType("drink")}
          className={`px-4 py-2 rounded-lg transition ${
            quizType === "drink" ? "bg-blue-500 text-white" : "hover:bg-zinc-800"
          }`}
        >
          Drinks
        </button>
      </div>

      <ConnectButton
        client={client}
        appMetadata={{
          name: "Example app",
          url: "https://example.com",
        }}
      />
    </nav>
  );
}
