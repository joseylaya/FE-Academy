import { useEffect, useState } from 'react';
import Axios from 'axios'
import {
     Card,
     Box,
     Grid,
     Container,
     Typography,
     Button,
     TextareaAutosize,
     TextField,
} from '@mui/material';
import { Tooltip } from 'antd';

import { useParams} from 'react-router-dom';

import Iconify from '../components/iconify';

export function CourseEditPage() {

     const [editingStartPoint, setEditingStartPoint] = useState(false);
     const [editingStartPointIndex, setEditingStartPointIndex] = useState(null);
     const [startPoint, setStartPoint] = useState('');

     const [editingEndPoint, setEditingEndPoint] = useState(false);
     const [editingEndPointIndex, setEditingEndPointIndex] = useState(null);
     const [endPoint, setEndPoint] = useState('');

     const [editingTranscript, setEditingTranscript] = useState(false);
     const [editingTranscriptIndex, setEditingTranscriptIndex] = useState(null);
     const [isTranscript, setIsTranscript] = useState([]);

     
     const [editingModule, setEditingModule] = useState(false);
     
     const [moduleTitle, setModuleTitle] = useState('About Proweaver');

     const [editingVideoUrl, setEditingVideoUrl] = useState(false);
     const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=XeiOnkEI7XI');

     const [transcript, setTranscript] = useState('')

     const { id } = useParams();

     useEffect(() => {
          const fetchContentData = async () => {
            try {
              const response = await Axios.get(`http://localhost:8000/content/${id}`);
              const content = response.data.moduleContent;
              const course  = response.data.courseData;
      
              if (content.length > 0) {
               //  setCourseIsData(course)
               //  setGetNextMod(content)
                const decodedData = JSON.parse(content[0].content);
                const decodedLessonAbout = decodedData.lessonAbout;
      
                setModuleTitle(decodedLessonAbout[0].lessonOverview)
                setVideoUrl(decodedLessonAbout[0].videoSrc)
                setIsTranscript(decodedLessonAbout[0].transcript)
              } else {
                console.log('No data found');
               //  setIsLoading(false);
              }
            } catch (error) {
              console.error('Error fetching content data:', error);
          //     setIsLoading(false);
            }
          };
      
          fetchContentData();
        }, [id]);
      

        

     const handleStartPointEditClick = (index) => {
          setEditingStartPoint(true);
          
          setEditingStartPointIndex(index);
     };

     const handleEndPointEditClick = (index) => {
          setEditingEndPoint(true);
          setEditingEndPointIndex(index);
     };

     const handleModuleEditClick = () => {
          setEditingModule(true);
     };

     const handleTranscriptEditClick = (index) => {
          setEditingTranscript(true);
          setEditingTranscriptIndex(index)
     };

     const handlVideoUrlEditClick = () => {
          setEditingVideoUrl(true);
     };

     const saveStartPoint = (index) => {

          setEditingStartPoint(false);
          // Save startPoint to your backend or do other necessary actions
     };

     const saveEndPoint = () => {
          setEditingEndPoint(false);
          // Save endPoint to your backend or do other necessary actions
     };

     const saveModuleTitle = () => {
          setEditingModule(false);
          // Save module to your backend or do other necessary actions
     };

     const saveVideoUrl = () => {
          setEditingVideoUrl(false);
          // Save module to your backend or do other necessary actions
     };

     const saveTranscript = () => {
          setEditingTranscript(false);
          // Save transcript to your backend or do other necessary actions
     };

     const editIconStyle = {
          cursor: 'pointer',
          color: '#D526FF',
          '&:hover': {
               color: '#D526FF'
          }
     }
     const handleInputChange = () => {
          
     }

     const tooltipTitle = "Edit"
     return (
          <>
               <Container maxWidth="xl" id="about">
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6} lg={8} sx={{maxHeight:'60vh'}}>
                                   {isTranscript.length > 0 ? (
                                        isTranscript.map((val, index) => (
                                        <Card key = {index} sx={{mt:2}}>
                                             <Box className="item" sx={{ pt: 2, px: 2, mb: 3 }} icon={<Iconify icon="line-md:chevron-small-right" />}>
                                                       {editingStartPoint && editingStartPointIndex === index  ? (
                                                            <>
                                                                 <TextField
                                                                 id="outlined-basic" 
                                                                 label="Start Point" 
                                                                 variant="outlined"
                                                                 value={startPoint}
                                                                      onChange={(e) => setStartPoint(e.target.value)}
                                                                      style={{ width: 'auto', fontSize: '5px', height: '2px' }}
                                                                 />
                                                                 <Button onClick={() => (saveStartPoint(index))}>Save</Button>
                                                            </>
                                                       ) : (
                                                            <>
                                                            <TextField
                                                                 id="outlined-basic" 
                                                                 label="Start Point" 
                                                                 variant="outlined"
                                                                 value={val.startTime}
                                                                      onChange={(e) => setStartPoint(e.target.value)}
                                                                      style={{ width: 'auto', fontSize: '5px', height: '2px' }}
                                                                 />
                                                                 {/* <Typography variant="p" sx={{ fontWeight: 'normal' }}>
                                                                      &nbsp;{val.startTime}
                                                                 </Typography>&nbsp; */}
                                                                 <Tooltip placement="top" title={tooltipTitle}>
                                                                      <Iconify icon="line-md:pencil" onClick={() => handleStartPointEditClick(index)} style={editIconStyle} />
                                                                 </Tooltip>
                                                            </>
                                                       )}
                                                       &nbsp;&nbsp;&nbsp;
                                                       {editingEndPoint && editingEndPointIndex === index  ? (
                                                            <>
                                                                 <TextField
                                                                 id="outlined-basic" 
                                                                 label="End Point" 
                                                                 variant="outlined"
                                                                 value={endPoint}
                                                                 onChange={(e) => setEndPoint( e.target.value)}
                                                                 rows={1}
                                                                 style={{ width: 'auto', fontSize: '16px', height: '25px' }}
                                                                 />
                                                                 <Button onClick={saveEndPoint}>Save</Button>
                                                            </>
                                                       ) : (
                                                            <>
                                                                 <TextField
                                                                 id="outlined-basic" 
                                                                 label="End Point" 
                                                                 variant="outlined"
                                                                 value={val.endTime}
                                                                      onChange={(e) => setStartPoint(e.target.value)}
                                                                      style={{ width: 'auto', fontSize: '16px', height: '25px' }}
                                                                 />
                                                                 
                                                                 <Tooltip placement="top" title={tooltipTitle}>
                                                                      <Iconify icon="line-md:pencil" onClick={() => handleEndPointEditClick(index)}style={editIconStyle} />
                                                                 </Tooltip>
                                                            </>
                                                       )}
                                             </Box>
                                             <Box sx={{ py: 2, px: 2 }}>
                                                  <Typography variant="h6">
                                                       Transcript &nbsp;
                                                       <Tooltip placement="right" title={tooltipTitle}>
                                                            <Iconify icon="line-md:pencil" onClick={() => (handleTranscriptEditClick(index))} style={editIconStyle} />
                                                       </Tooltip>
                                                  </Typography>
                                                  {editingTranscript && editingTranscriptIndex === index   ? (
                                                       <>
                                                            <TextareaAutosize
                                                            value={val.text}
                                                            onChange={(e) => setTranscript(e.target.value)}
                                                            rows={8}
                                                            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
                                                            />
                                                            <Button  onClick={() => saveTranscript(index)}>Save</Button>
                                                       </>
                                                  ) : (
                                                       <>
                                                            <Typography variant="p">{val.text}</Typography>
                                                       </>
                                                  )}
                                             </Box>
                                        </Card>
                                             ))
                                   ) : ( <Typography variant="p">No Data Found</Typography>) }
                         </Grid>
                         
                         <Grid item xs={12} md={6} lg={4}>
                              <Card sx={{ mb: 2 , mt:2}}>
                                   <Box sx={{ pb: 1 }} dir="ltr">
                                        <Typography variant='h6' component='h1' sx={{ padding: '10px', justifyContent: 'center', display: 'flex' }}>
                                             Course Overview
                                        </Typography>
                                        <Box className='item flexSB' sx={{ marginTop: '10px !important', padding: '5px 20px !important' }}>
                                             <Box className='text'>
                                                  <Typography variant='h6' >
                                                       Module Title:&nbsp;
                                                       {editingModule ? (
                                                            <>
                                                                 <TextareaAutosize
                                                                      value={moduleTitle}
                                                                      onChange={(e) => setModuleTitle(e.target.value)}
                                                                      rows={1}
                                                                      style={{ width: 'auto', fontSize: '16px', height: '25px' }}
                                                                 />
                                                                 <Button onClick={saveModuleTitle}>Save</Button>
                                                            </>
                                                       ) : (
                                                            <>
                                                                 <Typography variant="p" sx={{ fontWeight: 'normal' }}>
                                                                      &nbsp;{moduleTitle}
                                                                 </Typography>&nbsp;
                                                                 <Tooltip placement="right" title={tooltipTitle}>
                                                                      <Iconify icon="line-md:pencil" onClick={handleModuleEditClick} style={editIconStyle} />
                                                                 </Tooltip>
                                                            </>
                                                       )}
                                                  </Typography>
                                             </Box>
                                        </Box>

                                        <Box className='item flexSB' sx={{ marginTop: '10px !important', padding: '5px 20px !important' }}>
                                             <Box className='text'>
                                                  <Typography variant='h6' >
                                                       Video URL:&nbsp;
                                                       {editingVideoUrl ? (
                                                            <>
                                                                 <TextareaAutosize
                                                                      value={videoUrl}
                                                                      onChange={(e) => setVideoUrl(e.target.value)}
                                                                      rows={1}
                                                                      style={{ width: 'auto', fontSize: '16px', height: '25px' }}
                                                                 />
                                                                 <Button onClick={saveVideoUrl}>Save</Button>
                                                            </>
                                                       ) : (
                                                            <>
                                                                 <Typography variant="p" sx={{ fontWeight: 'normal' }}>
                                                                      &nbsp;{videoUrl}
                                                                 </Typography>&nbsp;
                                                                 <Tooltip placement="right" title={tooltipTitle}>
                                                                      <Iconify icon="line-md:pencil" onClick={() => handlVideoUrlEditClick} style={editIconStyle} />
                                                                 </Tooltip>
                                                            </>
                                                       )}
                                                  </Typography>
                                                  {/* <Typography>{val.desc}</Typography> */}
                                             </Box>
                                        </Box>
                                   </Box>
                              </Card>
                              <Button variant="contained" endIcon={<Iconify icon="line-md:chevron-small-right" />}>
                                   Next Module
                              </Button>
                         </Grid>
                    </Grid>
               </Container>
          </>
     );
}
