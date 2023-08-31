import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Axios from 'axios';
// @mui
import {
     Card,
     Box,
     Grid,
     Container,
     Typography,
     Button, Chip,
     List,
     ListItem,
     ListItemAvatar,
     Avatar,
     ListItemText
} from '@mui/material';
import { Star, CardMembership, Checklist, ClosedCaption, Check, Person } from '@mui/icons-material';

import { useNavigate, useParams } from 'react-router-dom';

import { fDate } from '../utils/formatTime';

import Iconify from '../components/iconify';
import Module from '../middleware/courses/module';
import { CourseEditPage } from './CourseEditPage'
import { CourseAddModulePage } from './CourseAddModulePage'
import  AddQuizPage  from './AddQuizPage'

// import 'video.js/dist/video-js.css';

// ----------------------------------------------------------------------

export default function CourseOverview() {

     const { id } = useParams();
     const storedUserId = sessionStorage.getItem('userId');
     const [courseData, setCourseData] = useState('');
     const [skills, setSkills] = useState('');
     const [takenCourse, setTakenCourse] = useState(0);
     const [isSticky, setIsSticky] = useState(false);

     const [transcriptEdit, setTranscriptEdit] = useState(false);
     const [isAddModule, setIsAddModule] = useState(false);
     const [isAddExam, setIsAddExam] = useState(false);
     const [isRole, setIsRole] = useState(1);
     
     const [showText, setShowText] = useState(false);


     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch(`http://localhost:8000/singleCourse/${id}`); // Replace "/api/data/${id}" with your actual API endpoint
           const data = await response.json();
               try {
                    const response = await fetch(`http://localhost:8000/user/${storedUserId}`); // Replace "/api/data/${id}" with your actual API endpoint
                    const data2 = await response.json();
                    setIsRole(data2[0].Role)
                    const idey = data2[0].current_course_id;
                    // if (Number(currentCourseId) !== 0 || Number(currentCourseId) === Number(id)) {
                         const currentCourseId = idey.toString();
                         setTakenCourse(currentCourseId);
                    //  } else {
                    //      setTakenCourse(false);
                    //  }
                     
                    // console.log(takenCourse)
               } catch (error) {
                    console.error(error);
               }
           const skill = data.modules[0].skillsToLearn.split(',');
           setSkills(skill)
 
           setCourseData(data.modules[0]);

         } catch (error) {
           console.error(error);
         }
       };
   
       fetchData();
     }, []);

     useEffect(() => {
          const handleScroll = () => {
               const offset = window.scrollY;
               const threshold = 300; // Adjust this value as needed

               // Check if the user has scrolled beyond the threshold
               setIsSticky(offset > threshold);
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     const navigate = useNavigate();

     const handleClick = (event, id) => {
          // event.preventDefault()
          navigate(`/dashboard/content/${id}`)
     }

     const handleClickEdit = (event) => {
          setTranscriptEdit(true);
          setIsAddModule(false);
          setIsAddExam(false);
     }

     const handleClickAdd = (event) => {
          setIsAddModule(true);
          setTranscriptEdit(false);
          setIsAddExam(false);
     }

     const handleClickAddExam = (event) => {
          setIsAddExam(true);
          setIsAddModule(false);
          setTranscriptEdit(false);
     }

     const handleAddTakeCourse = (event, id, storedUserId) => {
          console.log('this is id from course' , id )
          console.log('this is id from userdata' , storedUserId )

             if(storedUserId.length > 0 ){
               Axios
               .post('http://localhost:8000/addTakenCourse ', {
                 idey: id,
                 userId: storedUserId
               })
               
               .then((response) => {
                    if(response){
                         navigate(`/dashboard/content/${id}`)
                    }
               })
         
               .catch((error) => {
                 console.error(error);
                 // Handle the error
               });
             }


     }

     const cardStyle = {
          position: isSticky ? 'fixed' : 'static',
          top: 70,
          zIndex: 999,
          width: 354,
          // Add other desired styles for the sticky state
     };

     const handleAnchorClick = (event, targetId) => {
          event.preventDefault();
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
               targetElement.scrollIntoView({ behavior: 'smooth' });
          }
     }

     const goBack = () => {
          setTranscriptEdit(false);
          setIsAddModule(false);
          setIsAddExam(false);
     };
     

     return (
          <>
          <Helmet>
               <title> Procademy | Minimal UI </title>
          </Helmet>
               <Container maxWidth="xl">
               <Box sx={{ display: "flex " }}>
                    <Box>
                         <Box className='rate' sx={{ pr: 5, width: '220px' }}>
                              <Avatar src={`/assets/images/avatars/avatar_${courseData.id}.jpg`} alt="Avatar" style={{ width: '100%', height: 'auto' }} />
                         </Box>
                    </Box>
                    <Box>
                         <Typography variant="h3" sx={{ mb: 2 }}>
                              {courseData.courseName}
                         </Typography>

                         <Box className='rate'>
                              <Typography component='label' htmlFor='' sx={{ margin: '0px 5px', color: '#00000085' }}>
                                   by Proweaver
                              </Typography>
                              {/* <Typography component='label' htmlFor='' sx={{ margin: '0px 10px', color: '#00000085' }}>
                              {courseData.enrollees} <Person sx={{ fontSize:"medium", marginBottom:"-2px"}}/>
                              </Typography> */}
                              <Typography component='label' htmlFor=''>
                                   |
                              </Typography>
                              <Typography component='label' htmlFor='' sx={{ margin: '0px 10px', color: '#00000085' }}>
                                   {fDate(courseData.date_created)}
                              </Typography>
                         </Box>

                         <Box sx={{ margin: '50px 0px'}}>
                         {
                              takenCourse === id ? (
                                   <Button variant="contained" startIcon={<Iconify icon="line-md:confirm" />} onClick={(event) => handleClick(event, id)}>
                                        Resume
                                   </Button>
                              ) : takenCourse === '0' ? (
                                   <Button variant="contained" startIcon={<Iconify icon="line-md:confirm" />} label = "additional-row taken-course-tbl" onClick={(event) => handleAddTakeCourse(event, id, storedUserId)} >
                                        Get Started
                                   </Button>
                              ) : (
                                   <Button variant="contained" startIcon={<Iconify icon="line-md:confirm" />} label = "update-row taken-course-tbl" onClick={(event) => handleClick(event, id)} disabled={'true'}>
                                        Get Started
                                   </Button>
                              )
                           }
                              &nbsp;
                              {isRole === 1 ? (
                                     <Typography variant="h5" sx={{ fontWeight: 'bold' }}/>
                                   ) : (
                                  <>
                                   &nbsp;
                                   {transcriptEdit ?
                                        <Button variant="contained" onClick={goBack}>
                                             Done
                                        </Button>
                                                  :
                                        <Button  variant="contained" startIcon={<Iconify icon="line-md:pencil" />} onClick={(event) => handleClickEdit(event, id)}>
                                             Update Module
                                        </Button>
                                   }
                                    &nbsp;
                                   {isAddModule ? (
                                        <Button variant="contained" onClick={goBack}>
                                        Done
                                        </Button>
                                   ) : (
                                        <Button
                                        variant="contained"
                                        startIcon={<Iconify icon="line-md:plus" />}
                                        onClick={(event) => handleClickAdd(event, id)}
                                        >
                                        Add Module
                                        </Button>
                                   )}
                                   &nbsp;
                                   {isAddExam ? (
                                        <Button variant="contained" onClick={goBack}>
                                        Done
                                        </Button>
                                   ) : (
                                        <Button
                                        variant="contained"
                                        startIcon={<Iconify icon="line-md:plus" />}
                                        onClick={(event) => handleClickAddExam(event, id)}
                                        >
                                        Add Exam
                                        </Button>
                                   )}
                                   </>
                              )}
                         </Box>
                    </Box>
               </Box>
               </Container>
          {transcriptEdit ? <CourseEditPage /> :
          <>
          {isAddModule ? <CourseAddModulePage/> :
          <>
           {isAddExam ? <AddQuizPage/> :
               <Container maxWidth="xl">
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6} lg={8}>
                              <Card id='about'>
                                   <Box className='item flexSB' sx={{ pt: 2, px: 2 }}>
                                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                                             Skills you'll gain
                                        </Typography>
                                   </Box>

                                   <Box className='item flexSB' sx={{ py: 2, px: 2 }}>
                                   <List sx={{ display: 'flex', width: '100%', flexWrap: 'wrap', mb: 4 }}>
                                  
                                   <ListItem >
                                   {skills.length > 0 ?  (skills.map((skill, index) => (
                                         <Chip key={index} label={skill} sx={{ marginRight: '8px' }} />
                                        ))):(
                                             <Typography variant="h4" gutterBottom>
                                             No posts available
                                           </Typography>
                                        )
                                   }
                                    </ListItem>
                                   </List>
                                        <Typography variant='h5' sx={{ fontWeight: 'bold' }} id='about'>
                                             Details to know
                                        </Typography>
                                        <List sx={{ display: 'inline-flex', width: '100%', bgcolor: 'background.paper' }}>
                                             <ListItem>
                                                  <ListItemAvatar>
                                                       <Avatar>
                                                            <CardMembership />
                                                       </Avatar>
                                                  </ListItemAvatar>
                                                  <ListItemText primary="Shareable Certificate" secondary="Add to your portfolio" />
                                             </ListItem>
                                             <ListItem>
                                                  <ListItemAvatar>
                                                       <Avatar>
                                                            <Checklist />
                                                       </Avatar>
                                                  </ListItemAvatar>
                                                  <ListItemText primary="Quizzes and assessments " secondary="3 quizzes, 6 assessments" />
                                             </ListItem>
                                             <ListItem>
                                                  <ListItemAvatar>
                                                       <Avatar>
                                                            <ClosedCaption />
                                                       </Avatar>
                                                  </ListItemAvatar>
                                                  <ListItemText primary="English" secondary="Subtitles: Visaya, Tagalog, + 100 more" />
                                             </ListItem>
                                        </List>
                                   </Box>
                              </Card>
                         </Grid>
                         <Grid item xs={12} md={4} lg={3}>
                              <Card style={cardStyle}>
                                   <Box sx={{ pb: 1 }} dir="ltr">
                                        <Typography variant='h6' component='h1' sx={{ padding: '10px', justifyContent: 'center', display: 'flex' }}>
                                             Course Overview
                                        </Typography>
                                        <Box className='item flexSB' sx={{ marginTop: '20px !important', padding: '5px 20px !important' }}>
                                             <Box className='text'>
                                                  <Typography variant='p'>
                                                       {/* <a href='#about' onClick={handleAnchorClick}>1. About the Course</a> */}
                                                       <a href='#about' onClick={(event) => handleAnchorClick(event, 'about')}>1. About the Course</a>
                                                  </Typography>
                                                  {/* <Typography>{val.desc}</Typography> */}
                                             </Box>
                                        </Box>

                                        <Box className='item flexSB' sx={{ marginTop: '20px !important', padding: '5px 20px !important' }}>
                                             <Box className='text'>
                                                  <Typography variant='p'>
                                                       <a href='#outcome' onClick={(event) => handleAnchorClick(event, 'about')}>2. Outcomes</a>
                                                  </Typography>
                                                  {/* <Typography>{val.desc}</Typography> */}
                                             </Box>
                                        </Box>

                                        <Box className='item flexSB' sx={{ marginTop: '20px !important', padding: '5px 20px !important' }}>
                                             <Box className='text'>
                                                  <Typography variant='p'>
                                                       3. Modules
                                                  </Typography>
                                                  {/* <Typography>{val.desc}</Typography> */}
                                             </Box>
                                        </Box>

                                        <Box className='item flexSB' sx={{ marginTop: '20px !important', padding: '5px 20px !important' }}>
                                             <Box className='text'>
                                                  <Typography variant='p'>
                                                       4. Testimonials
                                                  </Typography>
                                                  {/* <Typography>{val.desc}</Typography> */}
                                             </Box>
                                        </Box>

                                        <Box className='item flexSB' sx={{ marginTop: '20px !important', padding: '5px 20px !important' }}>
                                             <Box className='text'>
                                                  <Typography variant='p'>
                                                       5. Reviews and Feedbacks
                                                  </Typography>
                                                  {/* <Typography>{val.desc}</Typography> */}
                                             </Box>
                                        </Box>
                                   </Box>
                              </Card>
                         </Grid>

                    {/* OUTCOMES */}
                         <Grid item xs={12} md={6} lg={8}>
                              <Card>
                                   <Box className='item flexSB' sx={{ pt: 2, px: 2 }} id='outcome'>
                                        <Typography variant='h5' sx={{ fontWeight: 'bold' }} id='about'>
                                             Develop your subject-matter competence.
                                        </Typography>
                                   </Box>

                                   <Box className='item flexSB' sx={{ py: 2, px: 2 }}>
                                        <Typography variant='p'>
                                             {courseData.courseDesc}
                                        </Typography>
                                        <List>
                                             <ListItem><Check />Learn new concepts from corporate/industry experts</ListItem>
                                             <ListItem><Check />Gain a foundational understanding of a subject or tool</ListItem>
                                             <ListItem><Check />Develop job-relevant skills with hands-on projects</ListItem>
                                             <ListItem><Check />Earn a shareable career certificate</ListItem>
                                        </List>
                                   </Box>
                              </Card>
                         </Grid>

                    {/* MODULES */}
                         <Grid item xs={12} md={6} lg={8}>
                              <Card>
                               
                                   <Box className='item' sx={{ py: 2, px: 2 }}>
                                        
                                        <Module />
                                   </Box>
                              </Card>
                         </Grid>

                    </Grid>
               </Container >
               }
               </>
          }
          </>
     }
     </>
     );
}
