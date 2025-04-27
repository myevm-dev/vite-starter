import { ConnectButton } from "thirdweb/react";
import { client } from "../client";

export function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 bg-zinc-900 text-white shadow-lg z-50 border-b-2"
         style={{ borderColor: "#ea353d" }}>
      <nav className="w-full p-3 flex items-center justify-between">
        
        {/* Left - Menu Quiz Title */}
        <h1 className="text-xl font-bold" style={{ color: "#ea353d" }}>
          Menu Quiz
        </h1>

        {/* Right - Connect Button */}
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
