import "../middleware/quiz/testquiz.css";
import { useState } from "react";
import Menu from "../middleware/quiz/Menu";
import Quiz from "../middleware/quiz/Quiz";
import EndScreen from "../middleware/quiz/EndScreen";

import { GameStateContext } from "../middleware/quiz/helpers/Contexts";
// ['menu', 'playing', 'finished']

function QuizPage({id}) {
  const [gameState, setGameState] = useState("playing");
  const [userName, setUserName] = useState("");
  const [questionsLength, setQuestionsLength] = useState(0);
  const [score, setScore] = useState(0);
  const [idey, setIdey] = useState(id)

  return (
    <div className="App">
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          questionsLength,
          setQuestionsLength,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz contentId = {idey} />}
        {gameState === "finished" && <EndScreen contentId = {idey} />}
      </GameStateContext.Provider>
    </div>
  );
}

export default QuizPage;
