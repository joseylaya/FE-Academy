import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const AboutHome = () => {
  return (
    <Container maxWidth="1200px">
      <Box className='aboutHome'>
        <Box sx={{ display: "flex", margin: "auto" }}>
          <Box className='left row' sx={{ width: "50%" }}>
            <img src="../../../assets/dashboard/bg.JPG" alt='' />
          </Box>
          <Box className='right row' sx={{ width: "50%" }}>
            {/* <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />  */}
            <Typography variant="h5" component="h3" sx={{ color: 'purple' }}>LEARN ANYTHING</Typography>
            <Typography variant="h4" component="h5">Benefits About Online Learning Expertise</Typography>

            <Box className='item flexSB'
              sx={{
                boxShadow: "8px 8px 0 rgba(32, 33, 37, .1)",
                border: "1px solid #dbdce0",
                borderRadius: "8px",
                transition: "0.5s",
                '&:hover': {
                  transform: "translateY(-5px)",
                  boxShadow: "16px 16px 0 rgba(32, 33, 37, .06)",
                }
              }}>
              <Box className='text' sx={{ padding: "20px" }}>
                <Typography variant="h2" component="h2">Flexibility</Typography>
                <Typography variant="body1" component="p">Among the many benefits of an online learning, you’ll find virtual classrooms are great for people who are advancing their education while working. In a traditional classroom, lectures will be scheduled at a specific time of day and your schedule will be formed around the availability of classes.</Typography>
              </Box>
              <Box className='text' sx={{ padding: "20px" }}>
                <Typography variant="h2" component="h2">Career Advancement Opportunities</Typography>
                <Typography variant="body1" component="p">Just like courses taken in a traditional classroom setting, virtual learning can provide you with a number of career advancement opportunities. </Typography>
              </Box>
              <Box className='text' sx={{ padding: "20px" }}>
                <Typography variant="h2" component="h2">Benefits About Online Learning Expertise</Typography>
                <Typography variant="body1" component="p">Flexibility</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box >
    </Container >
  );
};

export default AboutHome;
