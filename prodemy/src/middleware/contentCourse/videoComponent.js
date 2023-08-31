import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Tabs, Tab, Card, Grid, Link, Button } from '@mui/material';

import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import Iconify from '../../components/iconify';
import VideoTranscriptBox from './videoTransBox';



function UserProfileTabs(props) {
     const { children, value, index, ...other } = props;

     return (
          <div
               role="tabpanel"
               hidden={value !== index}
               id={`simple-tabpanel-${index}`}
               aria-labelledby={`simple-tab-${index}`}
               {...other} 
          >
               {value === index && (
                    <Box sx={{ p: 3 }}>
                         <div>{children}</div>
                    </Box>
               )}
          </div>
     );
}

function a11yProps(index) {
     return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
     };
}

function VideoComponent({ videoSrc, transcript, subtitleSrc }) {
     const [showTranscript, setShowTranscript] = useState(true);
     const [isWideScreen, setIsWideScreen] = useState(false);
     const videoRef = useRef(null);
     const [value, setValue] = React.useState(0);

     useEffect(() => {
          const player = videojs(videoRef.current, {
               controls: true,
               fluid: true,
               notSupportedMessage: "Media Source Error! Please contact admin",
          });

          player.on('loadedmetadata', () => {
               const textTracks = player.textTracks();
               if (textTracks && textTracks.length > 0) {
                    const subtitleTrack = textTracks[0];
                    subtitleTrack.mode = 'showing'; // Display the subtitles
                    subtitleTrack.addEventListener('cuechange', () => {
                         const cues = subtitleTrack.activeCues;
                         if (cues && cues.length > 0) {
                              const cue = cues[0];
                              const subtitleElement = cue.getCueAsHTML();

                              // Make the subtitle draggable
                              subtitleElement.draggable = true;

                              subtitleElement.addEventListener('dragstart', (event) => {
                                   // Store the initial cursor position and subtitle position
                                   event.dataTransfer.setData('text/plain', 'DragSubtitle');
                                   event.dataTransfer.setDragImage(subtitleElement, 0, 0);
                                   event.dataTransfer.effectAllowed = 'move';
                              });

                              subtitleElement.addEventListener('drag', (event) => {
                                   // Update the subtitle position while dragging
                                   const videoRect = videoRef.current.getBoundingClientRect();
                                   const videoX = videoRect.left;
                                   const videoY = videoRect.top;
                                   const x = event.clientX - videoX;
                                   const y = event.clientY - videoY;
                                   subtitleElement.style.left = `${x}px`;
                                   subtitleElement.style.top = `${y}px`;
                              });
                         }
                    });
               }
          });

          return () => {
               player.dispose();
          };
     }, []);

     const handleChange = (event, newValue) => {
          setValue(newValue);
     };

     // const handleWideScreen = () => {
     //      const videoContainer = videoRef.current.parentElement;
     //      const videoRect = videoContainer.getBoundingClientRect();
     //      const offsetTop = videoRect.top;

     //      const targetScrollPosition = isWideScreen ? 0 : window.scrollY + offsetTop - 30;

     //      window.scrollTo({
     //           top: targetScrollPosition,
     //           behavior: 'smooth',
     //      });
     //      setIsWideScreen((prevIsWideScreen) => !prevIsWideScreen);
     // };


     useEffect(() => {
          const preventRightClick = (event) => {
               event.preventDefault(); // Prevent the default right-click context menu
          };
          window.addEventListener('contextmenu', preventRightClick);
          return () => {
               window.removeEventListener('contextmenu', preventRightClick);
          };
     }, []);

     return (
          <Box>
               <Box sx={{ width: '100%', paddingBottom: '56.25%', position: 'relative' }}>
                    <video
                         className="video-js vjs-default-skin vjs-big-play-centered"
                         autoPlay
                         src={videoSrc}
                         type="video/mp4"
                         disablePictureInPicture={0}
                         data-setup='{"playbackRates": [0.25, 0.5, 1, 1.5, 2]}'
                         style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                         ref={videoRef}
                    >
                           <style>
                              {`
                              .vjs-has-started .vjs-control-bar, .vjs-audio-only-mode .vjs-control-bar {
                                   background-image: linear-gradient(to bottom, rgba(232, 232, 232, 0), rgba(4, 4, 4, 0.46));
                                   background-color: transparent;                                
                              }
                              .vjs-default-skin .vjs-progress-holder .vjs-play-progress {
                              background: linear-gradient(
                              90deg,
                              purple,
                              transparent
                              );
                              background-size: 200% 100%;
                              `}
                         </style>
                         
                         <source src={videoSrc} type="video/mp4" />
                         <track
                              kind="captions"
                              src='../../../../assets/courses/videos/subs/whatisproweaver.vtt'
                              srcLang="en"
                              label="English Subtitles"
                              default
                         />
                    </video>
               </Box>

               <Box sx={{ borderBottom: 1, borderColor: 'divider', background: '#fff', borderRadius: "12px 12px 0px 0px" }}>
                         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                              <Tab label="Transcript" {...a11yProps(0)} />
                              <Tab label="Downloads" {...a11yProps(1)} />
                              <Tab label="Notes" {...a11yProps(2)} />
                              <Tab label="Discuss" {...a11yProps(3)} />
                              {/* <Button
                                   startIcon={<Iconify icon={isWideScreen ? 'line-md:switch-off' : 'line-md:switch'} />} // Step 2: Update the icon based on isWideScreen
                                   onClick={handleWideScreen}
                                   sx={{ position: 'absolute', right: 0, top: 5 }} 
                              >
                              {isWideScreen ? 'Wide Screen Off' : 'Wide Screen On'}
                         </Button> */}
                    </Tabs>
               </Box>

               <UserProfileTabs value={value} index={0}>
                         {showTranscript && <VideoTranscriptBox transcript={transcript} videoRef={videoRef} />}
                    </UserProfileTabs>

                    <UserProfileTabs value={value} index={1}>
                         Comming Soon!
                    </UserProfileTabs>

                    <UserProfileTabs value={value} index={2}>
                         Comming Soon!
                    </UserProfileTabs>

                    <UserProfileTabs value={value} index={3}>
                         Comming Soon!
                    </UserProfileTabs>

          </Box>
     );
}

export default VideoComponent;
