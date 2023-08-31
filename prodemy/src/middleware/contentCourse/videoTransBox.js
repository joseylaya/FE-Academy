import { useState, useRef, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemButton, Button, Checkbox } from '@mui/material';

function VideoTranscriptBox({ transcript, videoRef }) {
     const [highlightIndex, setHighlightIndex] = useState(-1);

     const handleTimeUpdate = () => {
          const currentTime = videoRef.current.currentTime;
          const newIndex = transcript.findIndex(
               (line) => currentTime >= line.startTime && currentTime < line.endTime
          );
          setHighlightIndex(newIndex);
     };

     useEffect(() => {
          const videoElement = videoRef.current;

          videoElement.addEventListener('timeupdate', handleTimeUpdate);

          return () => {
               videoElement.removeEventListener('timeupdate', handleTimeUpdate);
               
          };
     }, [videoRef, transcript]);

     useEffect(() => {
          const videoElement = videoRef.current;

          const handleClick = () => {
               const selectedLine = transcript.find(
                    (line) => line.startTime <= videoElement.currentTime && videoElement.currentTime <= line.endTime
               );

               if (selectedLine) {
                    videoElement.currentTime = selectedLine.startTime;
               }
          };

          videoElement.addEventListener('click', handleClick);

          return () => {
               videoElement.removeEventListener('click', handleClick);
          };
     }, [videoRef, transcript]);

     // Filter the highlighted line based on highlightIndex
     const highlightedLine = highlightIndex !== -1 ? transcript[highlightIndex] : null;

     return (
          <Box sx={{ textAlign: 'justify' }}>
               {highlightedLine && (
                    <Typography
                         variant="body1"
                         className="highlighted"
                         style={{
                              fontWeight: 600,
                              padding: '5px',
                              color: 'rgba(0, 0, 0, 0.75)',
                         }}
                    >
                         {highlightedLine.text}
                    </Typography>
               )
               }
          </Box>
     );
}

export default VideoTranscriptBox;
