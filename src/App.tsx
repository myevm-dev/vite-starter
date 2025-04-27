import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Progress } from "./components/Progress";
import { SushiQuiz } from "./components/SushiQuiz";



export function App() {
  const [progress, setProgress] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <main className="pt-24 px-4 pb-10 min-h-screen flex flex-col items-center justify-center container max-w-screen-lg mx-auto">
      <Navbar />

      {/* Progress Dropdown for Mobile */}
      <Progress onProgressUpdate={setProgress} onSelectCategory={setSelectedCategory} />

      <div className="py-10 w-full flex flex-col items-center">
        <SushiQuiz />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-10 text-center">
      <h1 className="text-3xl font-bold">Menu Quiz</h1>
      <p className="text-lg text-zinc-400 mt-2">Select a category to start the quiz</p>
    </header>
  );
}
