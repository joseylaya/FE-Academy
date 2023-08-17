import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box, Tab } from '@mui/material';
// ----------------------------------------------------------------------
const StyledContent = styled('div')(({ theme }) => ({
     maxWidth: 480,
     margin: 'auto',
     minHeight: '10vh',
     height: '40vh',
     display: 'flex',
     justifyContent: 'center',
     flexDirection: 'column',
     padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function CourseCompletedPage() {
     return (
          <>
               <Helmet>
                    <title> My Progress | Completed | Minimal UI </title>
               </Helmet>
               <Box sx={{ borderBottom: 1, borderColor: 'divider', background: '#fff', borderRadius: "12px 12px 0px 0px" }}>
                    {/* <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                         Completed
                    </Typography> */}
                    <Tab label="Completed" />
               </Box>
               <Container sx={{ height: 'auto' }} >
                    <StyledContent >
                         <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                              Sorry, You have not completed any courses yet!
                         </Typography>
                         <Box
                              component="img"
                              src="/assets/illustrations/No_data.svg"
                              sx={{ height: 260, mx: 'auto' }}
                         />
                         <Button to="/dashboard/courses" size="large" variant="contained" component={RouterLink}>
                              Get Started
                         </Button>
                    </StyledContent>
               </Container>
          </>
     );
}
