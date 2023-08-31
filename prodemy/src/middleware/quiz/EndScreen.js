import Axios from "axios";
import "./testquiz.css";
import { useContext, useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { GameStateContext } from "./helpers/Contexts";
// import { Questions } from "./helpers/Questions";
import examDataExport from './helpers/Questions';

const EndScreen = ({contentId}) => {
  const [moduleIndexId, setModuleIndexId] = useState(contentId)
  const [examContent, setExamData ] = useState([]);
  const [Questions, setQuestions] = useState([]);

  const { score, setScore, questionsLength, setQuestionsLength , setGameState, userName } = useContext(GameStateContext);
  
  const restartQuiz = () => {
    setScore(0);
    setGameState("playing");
  };


  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4">Quiz Finished</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        {/* {userName} */}
      </Typography>
      {Questions && questionsLength > 0 ?
          <Typography variant="h4" sx={{ mt: 2 }}>
          {score} / {questionsLength}
        </Typography>
         :
         <Typography variant="h4" sx={{ mt: 2 }}>
        Loading...
       </Typography>
         }
  
      <Button onClick={restartQuiz} variant="contained" sx={{ mt: 4 }}>
        Next Module
      </Button>
    </Box>
  );
};

export default EndScreen;