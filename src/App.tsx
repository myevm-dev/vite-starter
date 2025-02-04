import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Progress } from "./components/Progress";

export function App() {
  const [progress, setProgress] = useState<number>(0);

  return (
    <main className="pt-24 p-4 pb-10 min-h-[100vh] flex flex-col items-center justify-center container max-w-screen-lg mx-auto">
      <Navbar />
      
      {/* Call Progress WITHOUT a type prop */}
      <Progress onProgressUpdate={setProgress} />

      <div className="py-20">
        <Header />
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
