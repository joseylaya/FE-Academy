// import "./testquiz.css";
import { useState, useContext, useEffect } from "react";
import { Button, Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { GameStateContext } from "./helpers/Contexts";

import examDataExport from './helpers/Questions';
import Iconify from '../../components/iconify';


function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [Questions, setQuestions] = useState([]);
  const { id, moduleId, examContent } = examDataExport([]);

  const { idey } = useParams();

  const { score, setScore, gameState, setGameState } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answerKey === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answerKey === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  const containerStyle = {
    backgroundImage: `url('/assets/images/covers/quizBg.svg')`,
    backgroundSize: "cover", // Set the image size to cover the container
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };


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




  // const Questions = [
  //   {
  //     prompt: "In website anatomy, what do you call the section at the upper part of a website?",
  //     optionA: "Banner section",
  //     optionB: "Header section",
  //     asnwer: "optionB",
  //   },
  //   {
  //     prompt: "Which of this is not a programming language?",
  //     optionA: "Python",
  //     optionB: "JavaScript",
  //     asnwer: "optionA",
  //   },
  //   {
  //     prompt: "Which of this is not a javascript framework?",
  //     optionA: "React",
  //     optionB: "Angular",
  //     asnwer: "optionB",
  //   },
  // ];



  return (
    <>
      <Container className="Quiz" sx={containerStyle}>
        {Questions && Questions.length > 0 ?
          <>
            <Typography variant="h5" sx={{ mb: 5, mt: 10 }}>{Questions[currentQuestion].questions}</Typography>
            <Container className="questions">
              <Button
                onClick={() => {
                  chooseOption("optionA");
                }}
              >
                <Typography variant="h6">{Questions[currentQuestion].optionA}</Typography>
              </Button>
              <Button
                onClick={() => {
                  chooseOption("optionB");
                }}
              >
                <Typography variant="h6">{Questions[currentQuestion].optionB}</Typography>
              </Button>
            </Container>

            {currentQuestion === Questions.length - 1 ? (
              <Button onClick={finishQuiz} id="nextQuestion">
                <Typography variant="h6">Finish</Typography>
              </Button>
            ) : (
              <Button onClick={nextQuestion} id="nextQuestion" endIcon={<Iconify icon="line-md:chevron-small-right" />}>
                <Typography variant="h6" >next </Typography>
              </Button>
            )}
          </>
          : <Typography variant="h6" >No Exam </Typography>}
      </Container> :

    </>
  );
}




export default Quiz;