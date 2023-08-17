import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';

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

export default function CoursePogressPage() {
     return (
          <>
               <Helmet>
                    <title> My Progress | Completed | Minimal UI </title>
               </Helmet>

               <Container sx={{ height: 'auto' }}>
                    <StyledContent >
                         <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                              Sorry, You are not currently enrolled to any Courses!
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
