import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Input, Select, notification } from 'antd';
import { Grid, Card, Container, TableContainer, Table, TableBody, TableRow, TableCell, Box, Skeleton, CardContent } from '@mui/material';
import { AiOutlineUser, AiOutlineGoogle, AiOutlineDeploymentUnit, AiOutlineSafety, AiOutlineQq } from "react-icons/ai";
import Iconify from '../../components/iconify';

// LOADER FOR COURSE PAGE
export const LoaderCourse = () => (
     <TableContainer>
          <Table>
               <TableBody>
                    {[1, 2].map((rowIndex) => (
                         <TableRow key={rowIndex}>
                              {[1, 2, 3, 4].map((colIndex) => (
                                   <TableCell key={colIndex}>
                                        <Box style={{ marginBottom: '3px', padding: '0px' }}>
                                             <Skeleton
                                                  variant="rectangular"
                                                  animation="wave"
                                                  width="100%"
                                                  height={330}
                                                  sx={{
                                                       backgroundColor: ['#A9A9A9', '#F5F5F5'],
                                                       borderRadius: '8px;',
                                                  }}
                                             />
                                        </Box>
                                   </TableCell>
                              ))}
                         </TableRow>
                    ))}
               </TableBody>
          </Table>
     </TableContainer>
);

// LOADER FOR DASHBOARD PAGE
export const LoaderDash = () => (
     <>
          <Container maxWidth="100%" sx={{ height: "50vh" }}>
               <Grid item xs={12} md={6} lg={8}>

                    <Skeleton
                         variant="rectangular"
                         animation="wave"
                         width="100%"
                         height={480}
                         sx={{
                              backgroundColor: ['#A9A9A9', '#F5F5F5'],
                              borderRadius: '8px;',
                         }}
                    />
               </Grid>
          </Container>
          <Grid container spacing={3} sx={{
               maxWidth: " 1200px",
               padding: "20px 0px",
               margin: "auto"
          }}>


               <Grid item xs={12} md={6} lg={4}>
                    <Card>
                         <Box sx={{ padding: '20px' }}>

                              <Skeleton
                                   variant="rectangular"
                                   animation="wave"
                                   width="100%"
                                   height={300}
                                   sx={{
                                        backgroundColor: ['#A9A9A9', '#F5F5F5'],
                                        borderRadius: '8px;',
                                   }}
                              />

                         </Box>
                    </Card>
               </Grid>

               <Grid item xs={12} md={6} lg={4}>
                    <Card>
                         <Box sx={{ padding: '20px' }}>

                              <Skeleton
                                   variant="rectangular"
                                   animation="wave"
                                   width="100%"
                                   height={300}
                                   sx={{
                                        backgroundColor: ['#A9A9A9', '#F5F5F5'],
                                        borderRadius: '8px;',
                                   }}
                              />

                         </Box>
                    </Card>
               </Grid>

               <Grid item xs={12} md={6} lg={3}>
                    <Card>
                         <Box sx={{ padding: '20px' }}>
                              <Skeleton
                                   variant="rectangular"
                                   animation="wave"
                                   width="100%"
                                   height={300}
                                   sx={{
                                        backgroundColor: ['#A9A9A9', '#F5F5F5'],
                                        borderRadius: '8px;',
                                   }}
                              />
                         </Box>
                    </Card>
               </Grid>

               <Grid item xs={12} md={6} lg={6}>
                    <Card>
                         <Box sx={{ padding: '20px' }}>
                              <Skeleton
                                   variant="rectangular"
                                   animation="wave"
                                   width="100%"
                                   height={300}
                                   sx={{
                                        backgroundColor: ['#A9A9A9', '#F5F5F5'],
                                        borderRadius: '8px;',
                                   }}
                              />
                         </Box>
                    </Card>
               </Grid>

               <Grid item xs={12} md={6} lg={5}>
                    <Card>
                         <Box sx={{ padding: '20px' }}>
                              <Skeleton
                                   variant="rectangular"
                                   animation="wave"
                                   width="100%"
                                   height={300}
                                   sx={{
                                        backgroundColor: ['#A9A9A9', '#F5F5F5'],
                                        borderRadius: '8px;',
                                   }}
                              />
                         </Box>
                    </Card>
               </Grid>
          </Grid>
     </>
);

// LOADER FOR PROFILE PAGE
export const LoaderProfile = () => (
     <Grid style={{ backgroundColor: 'rgb(249, 250, 251)' }}>
          <Container sx={{ py: 5 }}>
               <Grid container spacing={3}>
                    <Grid item lg={4}>
                         <Card sx={{ marginBottom: "20px" }} >
                              <Skeleton
                                   variant="rectangular"
                                   animation="wave"
                                   width="100%"
                                   height={300}
                                   sx={{
                                        backgroundColor: ['#A9A9A9', '#F5F5F5'],
                                        borderRadius: '8px;',
                                   }}
                              />
                         </Card>

                         <Card sx={{ marginBottom: "20px" }}>
                              <Skeleton
                                   variant="rectangular"
                                   animation="wave"
                                   width="100%"
                                   height={500}
                                   sx={{
                                        backgroundColor: ['#A9A9A9', '#F5F5F5'],
                                        borderRadius: '8px;',
                                   }}
                              />
                         </Card>
                    </Grid>
                    <Grid item lg={8}>
                         <Card sx={{ marginBottom: "20px" }}>
                              <Skeleton
                                   variant="rectangular"
                                   animation="wave"
                                   width="100%"
                                   height={230}
                                   sx={{
                                        backgroundColor: ['#A9A9A9', '#F5F5F5'],
                                        borderRadius: '8px;',
                                   }}
                              />
                         </Card>

                         <Grid container>
                              <Grid item md={6}>
                                   <Card className="mb-4 mb-md-0" sx={{ marginBottom: "20px", marginRight: '20px' }}>
                                        <Skeleton
                                             variant="rectangular"
                                             animation="wave"
                                             width="100%"
                                             height={250}
                                             sx={{
                                                  backgroundColor: ['#A9A9A9', '#F5F5F5'],
                                                  borderRadius: '8px;',
                                             }}
                                        />
                                   </Card>
                              </Grid>

                              <Grid item md={6}>
                                   <Card className="mb-4 mb-md-0" sx={{ marginBottom: "20px" }}>
                                        <Skeleton
                                             variant="rectangular"
                                             animation="wave"
                                             width="100%"
                                             height={250}
                                             sx={{
                                                  backgroundColor: ['#A9A9A9', '#F5F5F5'],
                                                  borderRadius: '8px;',
                                             }}
                                        />
                                   </Card>
                              </Grid>
                         </Grid>
                         <Card sx={{ marginBottom: "20px" }}>
                              <Skeleton
                                   variant="rectangular"
                                   animation="wave"
                                   width="100%"
                                   height={150}
                                   sx={{
                                        backgroundColor: ['#A9A9A9', '#F5F5F5'],
                                        borderRadius: '8px;',
                                   }}
                              />
                         </Card>
                         <Card sx={{ marginBottom: "20px" }}>
                              <Skeleton
                                   variant="rectangular"
                                   animation="wave"
                                   width="100%"
                                   height={150}
                                   sx={{
                                        backgroundColor: ['#A9A9A9', '#F5F5F5'],
                                        borderRadius: '8px;',
                                   }}
                              />
                         </Card>
                    </Grid>
               </Grid>
          </Container>
     </Grid>
);