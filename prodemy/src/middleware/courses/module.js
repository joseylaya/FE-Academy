import React, { useEffect, useState } from "react";

import {
  Accordion, AccordionSummary, AccordionDetails,
  Typography, Grid, Box, List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@mui/material";
import {
  ExpandMore,
  Circle,
  Checklist,
  ClosedCaption,
  OndemandVideo,
  PlayCircleRounded,
  MenuBookRounded,
} from '@mui/icons-material';

import { useNavigate, useParams } from 'react-router-dom';

// const moment = require('moment');

function Module() {
  const [click, setClick] = useState(null);
  const [module, setmodule] = useState([]);
  const [moduleContent, setModuleContent] = useState([]);
  const [content, setContent] = useState([]);
  const { id } = useParams();


     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch(`http://localhost:8000/fetchModule/${id}`); // Replace "/api/data/${id}" with your actual API endpoint
           const data = await response.json();
          //  console.log(data.moduleContent);
           setmodule(data.modules);
           setModuleContent(data.moduleContent);
         } catch (error) {
           console.error(error);
         }
       };
   
       fetchData();
     }, []);

     const fetchContent = async (val) => {
      setContent('');
       const id  = val.id;
       try {
        const response = await fetch(`http://localhost:8000/fetchModuleContent/${id}`); // Replace "/api/data/${id}" with your actual API endpoint
        const data = await response.json();
          // console.log(data)
          setContent(data)

      } catch (error) {
        console.error(error);
      }
    };

  const toggle = (index) => {
    if (click === index) {
      setClick(null);
    } else {
      setContent([])
      setClick(index);
    }
  };

  // const currentTime = moment.duration(moduleContent.duration);
  // const formattedDuration = currentTime.humanize();

  // console.log(formattedDuration);
  // console.log(content)
  return (
    <>
      <Grid sx={{ my: 2 }} id="module">
        {module.map((val, index) => (
          <Accordion
            key={index}
          >
              <AccordionSummary
              expandIcon={click === index ? <ExpandMore /> : <ExpandMore className="rightArrow" />}
              sx={{
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#8E44ADD9',
                  color: '#fff',
                },
                '&:hover .rightArrow': {
                  color: '#fff',
                }
              }}
            >
              <Box>
                <Typography variant="h5">
                  {val.moduleName}
                </Typography>

                <Typography variant="caption">{val.description} &nbsp;<Circle sx={{ fontSize: '0.5rem' }} />&nbsp;# hours to complete</Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              <Typography variant="h6">
                What's Included
              </Typography>
              <List sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', bgcolor: 'background.paper' }}>
                <ListItem sx={{ flexBasis: '25%' }}>
                  <ListItemAvatar>
                    <Avatar>
                      <OndemandVideo />
                    </Avatar> 
                  </ListItemAvatar>
                  <ListItemText secondary="# Videos" />
                </ListItem>
                <ListItem sx={{ flexBasis: '25%' }}>
                  <ListItemAvatar>
                    <Avatar>
                      <ClosedCaption />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText secondary="# Quizzes" />
                </ListItem>
              </List>

              {/* Nested Accordion */}
              <Accordion key={index}
                expanded={click === index}
                onChange={() => toggle(index)}
             
                >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                    color: '#8E44ADD9',
                    width: '25%',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Typography variant="body1" sx={{ border: 'none' }} onClick={() => fetchContent(val)}>
                    {click === index ? 'Hide details' : 'Show more details'}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}> <PlayCircleRounded sx={{ fontSize: 'medium', margin: '-2px' }} />&nbsp; # Videos &nbsp;<Circle sx={{ fontSize: '0.5rem' }} />&nbsp; Total # minutes</Typography>
                </AccordionDetails>

                {content.length !== null && content.length > 0 ? (
                    content.map((val, index) => (
                      <AccordionDetails key={index}>
                        <Typography variant="body1">{val.moduleNameContent}&nbsp;&nbsp;</Typography>
                      </AccordionDetails>
                    ))
                  ) : (
                    <Typography variant="body1" sx={{ border: 'none' }}>
                      no content yet
                    </Typography>
                  )}


                {/* <AccordionDetails>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}> <Checklist sx={{ fontSize: 'medium', margin: '-2px' }} />&nbsp; # Quizzes &nbsp;<Circle sx={{ fontSize: '0.5rem' }} />&nbsp; Total # minutes</Typography>
                </AccordionDetails>

                {materials1.map((val, index) => (
                  <AccordionDetails key={index}>
                    <Typography variant="body1"> {val.lessons} &nbsp; &nbsp;</Typography>
                  </AccordionDetails>
                ))} */}

              </Accordion>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </>
  );
};

export default Module;
