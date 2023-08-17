import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Card, Box, Grid, Container, Typography, Button, TextField } from '@mui/material';
import { notification } from 'antd';
import { useParams } from 'react-router-dom';
import Iconify from '../components/iconify';

export function CourseAddModulePage() {
  const { id } = useParams();
  const [startPoint, setStartPoint] = useState('');

  const [endPoint, setEndPoint] = useState('');

  const [moduleTitle, setModuleTitle] = useState('About Proweaver');
  
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=XeiOnkEI7XI');
  const [contentId, setContentId] = useState('');
const [transcriptDataArray, setTranscriptDataArray] = useState([]);

// ... (existing imports)

    // New state for transcript containers array
    const [transcriptContainers, setTranscriptContainers] = useState([
      {
        startPoint: '',
        endPoint: '',
        transcript: '',
      },
    ]);
    // Function to add a new transcript container
    const handleAddNewTranscript = () => {
      setTranscriptContainers([...transcriptContainers, { startPoint: '', endPoint: '', transcript: '' }]);
    };

 const pushtodata = () => {
  const newTranscriptData = {
    lessonOverview: moduleTitle,
    videoSrc: videoUrl,
    moduleContentId: contentId,
    transcript: transcriptContainers.map((transcriptData) => ({
      startTime: Number(transcriptData.startPoint),
      endTime: Number(transcriptData.endPoint),
      text: transcriptData.transcript,
    })),
  };

  const updatedTranscriptDataArray = [...transcriptDataArray, newTranscriptData];
  setTranscriptDataArray(updatedTranscriptDataArray);
  console.log(updatedTranscriptDataArray);
};

  // Function to generate the JSON data format
const generateJsonData = () => {
    const jsonData = {
      lessonAbout: transcriptDataArray,
    };

    console.log(jsonData);
    const JsonContent = JSON.stringify(jsonData);

    if(JsonContent.length > 0 ){
      Axios
      .post('http://localhost:8000/insertContentmodule', {
        id,
        content: JsonContent,
      })
      
      .then((response) => {
        console.log(response);
        // Display success notification
        notification.success({
          message: 'User Added',
          description: 'The user has been successfully added.',
        });
      })

      .catch((error) => {
        console.error(error);
        // Handle the error
      });
    }
  };
  
    return (
      <>
        <Container maxWidth="xl" id="about">
          <Grid container spacing={3} sx={{mb: 2}}>
            <Grid item xs={12} md={6} lg={8} sx={{ maxHeight: '60vh', overflow: 'auto', scrollbarWidth: 'none' }}>
              {/* New code for rendering multiple transcript containers */}
              {transcriptContainers.map((transcriptData, index) => (
                <Card key={index} sx={{ mt: 2 }}>
                  <Box sx={{ pt: 2, px: 2, mb: 2 }} >
                    <TextField
                        id="outlined-basic" 
                        label="Start Point" 
                        variant="outlined"
                        value={transcriptData.startPoint}
                        onChange={(e) => {
                          const newTranscriptContainers = [...transcriptContainers];
                          newTranscriptContainers[index].startPoint = e.target.value;
                          setTranscriptContainers(newTranscriptContainers);
                        }}
                        style={{ width: 'auto', fontSize: '16px', height: '25px' }}
                      />
                      &nbsp;&nbsp;
                      <TextField
                        id="outlined-basic" 
                        label="End Point" 
                        variant="outlined"
                        value={transcriptData.endPoint}
                        onChange={(e) => {
                          const newTranscriptContainers = [...transcriptContainers];
                          newTranscriptContainers[index].endPoint = e.target.value;
                          setTranscriptContainers(newTranscriptContainers);
                        }}
                        rows={1}
                        style={{ width: 'auto', fontSize: '16px', height: '25px' }}
                      />
                  </Box>
  
                  <Box sx={{ pt: 2, px: 2, mb: 2, mt: 4 }}>
                  <Typography variant="h6" component="h1" sx={{ padding: '10px'}}>
                    Transcript
                  </Typography>
                    <TextField
                      id="outlined-basic" 
                      label="Transcript" 
                      variant="outlined"
                      value={transcriptData.transcript}
                      onChange={(e) => {
                        const newTranscriptContainers = [...transcriptContainers];
                        newTranscriptContainers[index].transcript = e.target.value;
                        setTranscriptContainers(newTranscriptContainers);
                      }}
                      rows={8}
                      style={{ width: '100%', fontSize: '16px' }}
                    />
                  </Box>
                </Card>
              ))}
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
            <Card sx={{ mt: 2 }}>
                 <Box sx={{ pb: 1 }} dir="ltr">
                  <Typography variant="h6" component="h1" sx={{ padding: '10px', justifyContent: 'center', display: 'flex' }}>
                    Course Overview
                  </Typography>

                  <Box className="item flexSB" sx={{ marginTop: '10px !important', padding: '5px 20px !important' }}>
                    <Box className="text">
                      <TextField  onChange={(e) => setContentId(e.target.value)} rows={1} id="outlined-basic" label="index number" variant="outlined" sx={{width: '100%'}} />
                    </Box>
                  </Box>

                  <Box className="item flexSB" sx={{ marginTop: '10px !important', padding: '5px 20px !important' }}>
                    <Box className="text">
                      <TextField  onChange={(e) => setModuleTitle(e.target.value)} rows={1} id="outlined-basic" label="Module Title" variant="outlined" sx={{width: '100%'}} />
                    </Box>
                  </Box>
                    
                  <Box className="item flexSB" sx={{ marginTop: '10px !important', padding: '5px 20px !important' }}>
                    <Box className="text">
                     <TextField  onChange={(e) => setVideoUrl(e.target.value)} rows={1} id="outlined-basic" label="Video URL" variant="outlined" sx={{width: '100%'}} />
                    </Box>
                  </Box>
                </Box>
              </Card>
              </Grid>
           </Grid>

          <Button variant="contained" endIcon={<Iconify icon="line-md:chevron-small-right" />} onClick={handleAddNewTranscript}>
              add new transcript
            </Button>
            &nbsp;
            <Button variant="contained" color="primary" onClick={pushtodata}>
              Add another module
            </Button>
            &nbsp;
            <Button variant="contained" color="primary" onClick={generateJsonData}>
              Generate JSON Data
            </Button>
        </Container>
      </>
    );
  }
