import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Box } from "@mui/material";
import { ExpandMore, Circle } from '@mui/icons-material';

function Module() {
  const [click, setClick] = useState(null);

  const toggle = (index) => {
    if (click === index) {
      setClick(null);
    } else {
      setClick(index);
    }
  };

  const faq = [
    {
      title: "Build Your Sales Career",
      module: "Module 1",
      desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Selling With a Consultative Mindset",
      module: "Module 2",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Customer Satisfaction",
      module: "Module 3",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
  ]
  const glance = [
    {
      courseGlance: "Flexible deadlines",
      desc: "Reset deadlines accordance to your schedule.",
    },
    {
      courseGlance: "Shareable Certificate",
      desc: "Earn a Certificate upon completion.",
    },
    {
      courseGlance: "100% online",
      desc: "Start instantly and learn at your own schedule.",
    },
  ]



  return (
    <>
      <Grid sx={{ mt: 2 }} id="module">
        {faq.map((val, index) => (
          <Accordion
            key={index}
          >
            <AccordionSummary
              expandIcon={click === index ? <ExpandMore sx={{ color: '#fff' }} /> : <ExpandMore />}
              sx={{
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#8E44ADD9',
                  color: '#fff'
                }
              }}
            >
              <Box>
                <Typography variant="h5">
                  {val.title}
                </Typography>

                <Typography variant="caption">{val.module} &nbsp;<Circle sx={{ fontSize: '0.5rem' }} />&nbsp;2 hours to complete</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{val.desc}</Typography>

              {/* Nested Accordion */}
              <Accordion key={index}
                expanded={click === index}
                onChange={() => toggle(index)}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                    color: '#8E44ADD9',
                    width: '25%'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Typography variant="body1">
                    {click === index ? 'Hide information' : 'Show more information'}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">Nested Accordion Content</Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </>
  );
};

export default Module;
