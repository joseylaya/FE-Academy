import React, { useState } from "react";
import {
     Container,
     Card,
     Box,
     Grid,
     TextField,
     Typography,
     InputLabel,
     MenuItem,
     Select,
     FormControl,
     Button,
} from "@mui/material";
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Zoom, ToastContainer, toast } from 'react-toastify';
import Iconify from '../components/iconify';
import 'react-toastify/dist/ReactToastify.css';

function AddQuizPage() {
     const { id } = useParams();
     const [quizContainers, setQuizContainers] = useState([
          {
               questions: '',
               option1: '',
               option2: '',
               answerKey: '',
          },
     ]);

     const handleOptionsChange = (event, option, index) => {
          setQuizContainers(prevContainers => {
               const updatedContainers = [...prevContainers];
               updatedContainers[index][option] = event.target.value;
               return updatedContainers;
          });
     };

     const handleChange = (event, index) => {
          setQuizContainers(prevContainers => {
               const updatedContainers = [...prevContainers];
               updatedContainers[index].answerKey = event.target.value;
               return updatedContainers;
          });
     };

     const handleClickAddQuiz = () => {
          setQuizContainers([...quizContainers, { questions: '', option1: '', option2: '', answerKey: '' }]);
     };

     const handleClickSave = async (event) => {
          event.preventDefault();
          const jsonContainers = {
               Questions: quizContainers.map((val) => ({
                    questions: val.questions,
                    option1: val.option1,
                    option2: val.option2,
                    answerKey: val.answerKey,
               }))
          }
          const encodedExam = JSON.stringify(jsonContainers);
          console.log(encodedExam);
          if (encodedExam.length > 0) {
               try {
                    Axios
                         .post("http://localhost:8000/Addquiz", {
                              id,
                              examContent: encodedExam,
                         }).then((response) => {
                              console.log(response);
                              toast.success('Successfully Saved', { autoClose: 2000, transition: Zoom });
                         });
               } catch (error) {
                    console.error("Error saving quiz:", error);
               }
          };
     };

     return (
          <Container maxWidth="xl" id="about">
               <ToastContainer />
               <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={8}>
                         {quizContainers.map((value, index) => (
                              <Card key={index} sx={{ mt: 2 }}>
                                   <Box sx={{ py: 2, px: 2 }}>
                                        <Typography variant="h6">Quiz</Typography>
                                        <TextField
                                             sx={{ mt: 2, width: "100%" }}
                                             type="text"
                                             label="Enter your question"
                                             value={value.questions}
                                             onChange={(event) => handleOptionsChange(event, 'questions', index)}
                                        />
                                   </Box>
                                   <Box sx={{ py: 2, px: 2 }}>
                                        <TextField
                                             type="text"
                                             label="Option 1"
                                             value={value.option1}
                                             onChange={(event) => handleOptionsChange(event, 'option1', index)}
                                        />
                                        &nbsp;
                                        <TextField
                                             type="text"
                                             label="Option 2"
                                             value={value.option2}
                                             onChange={(event) => handleOptionsChange(event, 'option2', index)}
                                        />
                                        <FormControl sx={{ float: 'right', width: '30%' }}>
                                             <InputLabel id={`demo-simple-select-label-${index}`}>
                                                  Answer Key
                                             </InputLabel>
                                             <Select
                                                  id={`demo-simple-select-${index}`}
                                                  value={value.answerKey}
                                                  onChange={(event) => handleChange(event, index)}
                                                  label="Answer Key"
                                             >
                                                  <MenuItem value="option1">Option A</MenuItem>
                                                  <MenuItem value="option2">Option B</MenuItem>
                                             </Select>
                                        </FormControl>
                                   </Box>
                              </Card>
                         ))}
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                         <Card sx={{ mt: 2 }}>
                              <Box sx={{ py: 2, px: 2 }}>
                                   <Box className='item flexSB' sx={{
                                        marginTop: '20px '
                                   }}>
                                        <Box className='text' >
                                             <Typography variant='h6' component='h1'>
                                                  Add another column for Questions
                                             </Typography>
                                             <Button variant="contained" onClick={handleClickAddQuiz} sx={{ mt: 1 }} startIcon={<Iconify icon="line-md:plus" />}>
                                                  Add
                                             </Button>
                                        </Box>
                                   </Box>
                                   <Box className='item flexSB' sx={{
                                        marginTop: '20px '
                                   }}>
                                        <Box className='text' >
                                             <Typography variant='h6' component='h1'>
                                                  Submit
                                             </Typography>
                                             <Button variant="contained" color="primary" onClick={handleClickSave} sx={{ mt: 2 }} startIcon={<Iconify icon="line-md:confirm" />}>
                                                  Confirm
                                             </Button>
                                        </Box>
                                   </Box>
                              </Box>
                         </Card>
                    </Grid>
               </Grid>
          </Container >
     );
}

export default AddQuizPage;
