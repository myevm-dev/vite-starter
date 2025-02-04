import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MultipleChoice } from "./components/MultipleChoice";

export function App() {
  const [quizType, setQuizType] = useState<"food" | "drink">("food");

  return (
    <main className="pt-20 p-4 pb-10 min-h-[100vh] flex flex-col items-center justify-center container max-w-screen-lg mx-auto">
      <Navbar setQuizType={setQuizType} quizType={quizType} />
      <div className="py-20">
        <Header />
        <MultipleChoice type={quizType} />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <h1 className="text-3xl font-bold">Welcome to My App</h1>
    </header>
  );
}
