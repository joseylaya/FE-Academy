import "./testquiz.css";
import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { GameStateContext } from "./helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );

  return (
    <div className="Menu">
      <TextField
        type="text"
        label="Enter your name"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <Button
        onClick={() => setGameState("playing")}
        variant="contained"
        color="primary"
      >
        Start Quiz
      </Button>
    </div>
  );
}

export default Menu;
