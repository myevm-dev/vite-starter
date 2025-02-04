import { ConnectButton } from "thirdweb/react";
import { client } from "../client";

export function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 bg-zinc-900 text-white shadow-lg z-50 border-b-2 border-[#D0733F]">
      <nav className="w-full p-3 flex items-center justify-between">
        
        {/* Left - Menu Quiz Title in Orange */}
        <h1 className="text-xl font-bold text-[#D0733F]">Menu Quiz</h1>

        {/* Right - Smaller Connect Button */}
        <div className="scale-75">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Example app",
              url: "https://example.com",
            }}
          />
        </div>
      </nav>
    </div>
  );
}
