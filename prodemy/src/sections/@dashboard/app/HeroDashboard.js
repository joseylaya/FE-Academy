import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Container, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";

import "../../../pages/about.css"

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
     const theme = useTheme();
     const navigate = useNavigate();
     const handleClick = () => {
          navigate("/dashboard/content");
     }

     const handleClick2 = () => {
          navigate('/dashboard/courses');
     };


     return (
          <>
               <Helmet>
                    <title> Procademy | Minimal UI </title>
               </Helmet>

               <Container maxWidth="100%" sx={{ backgroundImage: "url(../../../assets/dashboard/awrapper.webp)", backgroundSize: "cover", height: "30vh", backgroundAttachment: 'fixed' }}>
                    <Grid item xs={12} md={6} lg={8}>
                         <Box className=''>
                              <Box className=''>
                                   <Box className='button' sx={{ position: "absolute", top: "17.5%" }}>
                                        <Typography variant="h4" sx={{ mb: 5 }}>
                                             Hi, Welcome back
                                        </Typography>
                                        <Button variant='contained' color='primary' onClick={handleClick2}>
                                             GET STARTED NOW <ArrowForwardIcon />
                                        </Button>
                                   </Box>
                              </Box>
                         </Box>
                    </Grid>
               </Container>

          </>
     );
}
