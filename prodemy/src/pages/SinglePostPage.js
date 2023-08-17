import React, {useEffect, useState}  from "react";
import { Helmet } from 'react-helmet-async';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grid, Container, Typography, Card, Button, Box, Stack, Link, Divider} from '@mui/material';
import { AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { Content } from "antd/es/layout/layout";


export default function SinglePostPage() {
  const { id } = useParams();

  const [postData, setPostData] = useState('');
  const [otherPost, setOtherPost] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/singlePost/${id}`); // Replace "/api/data/${id}" with your actual API endpoint
        const data = await response.json();

        setPostData(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchDataPost = async () => {
      try {
        const response = await fetch(`http://localhost:8000/fetchPosts`); // Replace "/api/data/${id}" with your actual API endpoint
        const data = await response.json();

        setOtherPost(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataPost();
    fetchData();
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Dashboard | Minimal UI</title>
      </Helmet>

      <Container maxWidth="xl">

        <Typography variant="h4" sx={{ mb: 2 }}>
            {postData.province}
          <Button startIcon={<AiOutlineEdit />} color="primary" size="medium" />
        </Typography>
        <Typography variant="p" sx={{ mb: 5 }}>
        {postData.content}
          <Button startIcon={<AiOutlineEdit />} color="primary" size="medium" />
        </Typography> 

          <Grid container spacing={12}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" sx={{ mb: 2, mt: 5 }}>
                    Post Images
                </Typography>
                <Card>
              {postData && postData.image_urls && postData.image_urls.length > 0 ? (
                <Carousel autoPlay infiniteLoop>
                  {postData.image_urls.split(',').map((imageUrl, index) => (
                    <div key={index}>
                      <img alt="" src={imageUrl} />
                    </div>
                  ))}
                </Carousel>
              ) : (
                <Typography variant="body1" sx={{ p: 2 }}>No images available</Typography>
              )}
            </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              {/* Content for the second column */}
                  <Typography variant="h4" sx={{ mb: 2, mt: 5 }}> 
                    Post Information
                  </Typography>
              <Grid item xs={12} md={6} lg={8}>
                <Card>
                  <Box sx={{ padding: 5}}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box component="img" alt='koala' src='https://hips.hearstapps.com/hmg-prod/images/titanic-1669197072.jpg?crop=0.645xw:0.959xh;0.0798xw,0.0413xh&resize=1200:*' sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }} />
                      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
                        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
                          {postData.name}
                        </Link>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                          author
                        </Typography>
                      </Box>
                      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
                        2 months ago
                      </Typography>
                    </Stack>
                    <br/>
                    <Divider />
                    <br/>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box component="img" alt='koala' src='https://cdn-icons-png.flaticon.com/512/1427/1427965.png' sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }} />
                      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
                        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
                          May 31, 1999
                        </Link>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                          date created
                        </Typography>
                      </Box>
                  
                    </Stack>
                  </Box>
                </Card>
              <Typography variant="h4" sx={{ mb: 2, mt: 5 }}>
                Other Post
              </Typography>
              {otherPost && otherPost.length > 0 ? (
                <Card>
                  {otherPost.map((data, index) => (
                    <Box sx={{ padding: 5 }} key={index}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Box
                          component="img"
                          alt="koala"
                          src="https://cdn-icons-png.flaticon.com/512/6928/6928929.png"
                          sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
                        />
                        <Box sx={{ minWidth: 240, flexGrow: 1 }}>
                          <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
                            {data.content}
                          </Link>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                            Post Content sample 2 Neque porro quisquam est qui dolorem ipsum quia dolor
                          </Typography>
                        </Box>
                      </Stack>
                      <br />
                      {index !== otherPost.length - 1 && (
                        <>
                          <Divider />
                        </>
                      )}
                    </Box>
                  ))}
                </Card>
              ) : (
                <Typography variant="body1" sx={{ p: 2 }}>No other posts available</Typography>
              )}
              </Grid>
          </Grid>
        </Grid>
    </Container>
    </>
  );
}
