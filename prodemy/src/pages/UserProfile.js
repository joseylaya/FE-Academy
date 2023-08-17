import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
     Container,
     Card,
     CardContent,
     CardMedia,
     Button,
     Grid,
     Typography,
     Box,
} from '@mui/material';
import useUserData from '../_mock/UserData';
import { LoaderProfile } from '../middleware/loaders/loader';
import UserProfileTabs from './UserProfileTabs';
import UpdateUser from '../middleware/user/userAdd';





export default function UserProfile() {
     const { name, email } = useUserData();
     const [delayed, setDelayed] = React.useState(true)
     setTimeout(() => {
          setDelayed(false);
     }, 1500);

     const handleUpdate = async () => {

     };

     return (
          <>
               <Helmet>
                    <title> Dashboard: Profile | Minimal UI </title>
               </Helmet>
               {delayed === true ? <LoaderProfile /> :
                    <Grid style={{ backgroundColor: 'rgb(249, 250, 251)' }}>
                         <Container>
                              <Grid container spacing={3}>
                                   <Grid item lg={4}>
                                        <Card sx={{ marginBottom: "20px" }} >
                                             <CardContent sx={{ textAlign: 'center', display: 'grid', justifyContent: 'center', paddingBottom: '0px' }}>
                                                  <CardMedia
                                                       component="img"
                                                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                                       alt="avatar"
                                                       className="rounded-circle"
                                                       style={{ width: '180px' }}
                                                       sx={{ maxWidth: '100%', height: 'auto', mb: 2 }}
                                                  />
                                                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                       Trainee
                                                  </Typography>

                                                  <Box className="d-flex justify-content-center">
                                                       {/* <Button variant="contained">Edit Profile</Button> */}
                                                       <UpdateUser />
                                                  </Box>
                                             </CardContent>
                                        </Card>
                                        <Card sx={{ marginBottom: "20px" }} >
                                             <CardContent>

                                                  <Grid container>
                                                       <Typography variant="body2">
                                                            Name: &nbsp;
                                                       </Typography>
                                                       <Grid item sm={6}>
                                                            <Typography variant="body2" color="text.secondary">
                                                                 {name}
                                                            </Typography>
                                                       </Grid>
                                                  </Grid>
                                                  <Grid container>
                                                       <Typography variant="body2">
                                                            Email: &nbsp;
                                                       </Typography>
                                                       <Grid item sm={6}>
                                                            <Typography variant="body2" color="text.secondary">
                                                                 {email}
                                                            </Typography>
                                                       </Grid>
                                                  </Grid>
                                                  <Grid container>
                                                       <Typography variant="body2">
                                                            Address: &nbsp;
                                                       </Typography>
                                                       <Grid item sm={6}>
                                                            <Typography variant="body2" color="text.secondary">
                                                                 NA
                                                            </Typography>
                                                       </Grid>
                                                  </Grid>
                                                  <Grid container>
                                                       <Typography variant="body2">
                                                            Name: &nbsp;
                                                       </Typography>
                                                       <Grid item sm={6}>
                                                            <Typography variant="body2" color="text.secondary">
                                                                 NA
                                                            </Typography>
                                                       </Grid>
                                                  </Grid>
                                             </CardContent>
                                        </Card>
                                   </Grid>
                                   <Grid item lg={8}>
                                        <Grid>
                                             <UserProfileTabs />
                                        </Grid>
                                   </Grid>
                              </Grid>
                         </Container>
                    </Grid>
               }
          </>
     );
}
