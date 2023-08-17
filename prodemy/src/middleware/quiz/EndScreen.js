import "./testquiz.css";
import { useContext, useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { GameStateContext } from "./helpers/Contexts";
// import { Questions } from "./helpers/Questions";
import examDataExport from './helpers/Questions';

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );
  
  // const restartQuiz = () => {
  //   setScore(0);
  //   setGameState("menu");
  // };

  const { id, moduleId, examContent } = examDataExport([]);

  const [Questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const importData = examContent;
        if (importData && importData.length > 0) {
          const data = JSON.parse(importData);
          const cleanData = data.Questions;
          setQuestions(cleanData)
        } else {
          console.error("Error: examContent is empty or not valid JSON");
        }
      } catch (error) {
        console.error("Error parsing examContent JSON:", error);
      }
    };

    fetchData();
  }, [examContent]);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4">Quiz Finished</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        {/* {userName} */}
      </Typography>
      {Questions && Questions.length > 0 ?
          <Typography variant="h4" sx={{ mt: 2 }}>
          {score} / {Questions.length}
        </Typography>
         :
         <Typography variant="h4" sx={{ mt: 2 }}>
        Loading...
       </Typography>
         }
  
      {/* <Button onClick={restartQuiz} variant="contained" sx={{ mt: 4 }}>
        Next Module
      </Button> */}
    </Box>
  );
};

export default EndScreen;