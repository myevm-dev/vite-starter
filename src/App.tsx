import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Progress } from "./components/Progress";
import { AppetizerQuiz } from "./components/AppetizerQuiz"; // ✅ Ensure this is imported

export function App() {
  const [progress, setProgress] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // ✅ Track selected category

  return (
    <main className="pt-24 p-4 pb-10 min-h-[100vh] flex flex-col items-center justify-center container max-w-screen-lg mx-auto">
      <Navbar />
      
      {/* Progress Bar with Category Selection */}
      <Progress onProgressUpdate={setProgress} onSelectCategory={setSelectedCategory} />

      <div className="py-20">
        {selectedCategory === "Appetizers" ? (
          <AppetizerQuiz /> // ✅ This should now display when "Appetizers" is selected
        ) : (
          <Header />
        )}
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
