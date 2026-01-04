import { useState } from "react";
import Home from "./components/Home";
import AlphabetGame from "./components/AlphabetGame";
import ComptageGame from "./components/ComptageGame";
import SpotDifferenceGame from "./components/SpotDifferenceGame";
import "./App.css";

function App() {
  const [currentGame, setCurrentGame] = useState("home");

  const handleBack = () => setCurrentGame("home");

  return (
    <>
      {currentGame === "home" && <Home onSelectGame={setCurrentGame} />}
      {currentGame === "alphabet" && <AlphabetGame onBack={handleBack} />}
      {currentGame === "comptage" && <ComptageGame onBack={handleBack} />}
      {currentGame === "difference" && <SpotDifferenceGame onBack={handleBack} />}
    </>
  );
}

export default App;