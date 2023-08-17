import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { faker } from '@faker-js/faker';
import PropTypes from 'prop-types';
import { Container, Tabs, Tab, Typography, Box, Grid, Link, Card } from '@mui/material';
import CryptoJS from 'crypto-js';
import POSTS from '../_mock/blog';
import { BookmarkCard } from '../sections/@dashboard/blog';
import CoursePogressPage from './CoursePogressPage';
import CourseCompletedPage from './CourseCompletedPage';
import useBookmarkData from '../_mock/BookmarkData';

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

UserProfileTabs.propTypes = {
     children: PropTypes.node,
     index: PropTypes.number.isRequired,
     value: PropTypes.number.isRequired,
};

function a11yProps(index) {
     return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
     };
}

export default function BasicTabs() {
     const [value, setValue] = React.useState(0);
     const storedUserId = sessionStorage.getItem('userId');
     const handleChange = (event, newValue) => {
          setValue(newValue);
     };

     const changeTabValue = (newValue) => {
          setValue(newValue);
     };

     const decryptValue = (encryptedValue) => {
          const decryptedBytes = CryptoJS.AES.decrypt(encryptedValue, 'secret_key');
          const decryptedValue = decryptedBytes.toString(CryptoJS.enc.Utf8);
          return parseInt(decryptedValue, 10);
     };

     React.useEffect(() => {
          // Access the query parameter or state value to determine the desired tab value
          // For example, assuming you have a query parameter called "tab" in the URL
          const urlParams = new URLSearchParams(window.location.search);
          const encryptedTabParam = urlParams.get('tab');
          if (encryptedTabParam) {
               const decryptedTabValue = decryptValue(decodeURIComponent(encryptedTabParam));
               setValue(decryptedTabValue);
          }
     }, []);

     const savedBookmark = useBookmarkData();
     // console.log(savedBookmark);

     let post = [];
     if (savedBookmark && savedBookmark.length > 0) {
          post = savedBookmark.map((val, index) => ({
               id: val.id,
               title: val.course_details.courseName,
               createdAt: val.course_details.date_created,
               view: val.course_details.enrollees,
               bookmark: val.course_details.id,
               userID: storedUserId,
               cover: `/assets/images/covers/cover_${index + 1}.jpg`,
               comment: faker.datatype.number(),
               share: faker.datatype.number(),
               favorite: faker.datatype.number(),
               author: {
                    name: faker.name.fullName(),
                    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
               },
          }))
     }

     return (
          <Box sx={{ width: '100%' }}>
               <Box sx={{ borderBottom: 1, borderColor: 'divider', background: '#fff', borderRadius: "12px 12px 0px 0px" }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                         <Tab label="My Progress" {...a11yProps(0)} />
                         <Tab label="Saved Courses" {...a11yProps(1)} />
                         <Tab label="Certificates" {...a11yProps(2)} />
                    </Tabs>
               </Box>
               <Card sx={{ borderRadius: "0px 0px 12px 12px", marginBottom: "20px" }}>
                    <UserProfileTabs value={value} index={0}>
                         {/* <Grid container spacing={3}>
                              {POSTS.map((post, index) => (
                                   <BlogPostCard key={post.id} post={post} index={index} />
                              ))}
                         </Grid> */}
                         <CoursePogressPage />
                    </UserProfileTabs>
               </Card>
               <Card>
                    <UserProfileTabs value={value} index={0}>
                         <CourseCompletedPage />
                    </UserProfileTabs>
               </Card>

               <Card>
                    <UserProfileTabs value={value} index={1}>
                         <Container>
                              <Grid container spacing={3}>
                                   {post.map((post, index) => (
                                        <BookmarkCard key={post.id} post={post} index={index} />
                                   ))}
                              </Grid>
                         </Container>
                    </UserProfileTabs>
               </Card>

               <Card>
                    <UserProfileTabs value={value} index={2}>
                         <Grid container>
                              <Grid item sm={9}>
                                   <Typography variant="body2" color="text.secondary">
                                        <Link>Course_Certificate.pdf</Link>
                                   </Typography>
                              </Grid>
                         </Grid>
                    </UserProfileTabs>
               </Card>
          </Box>
     );
}