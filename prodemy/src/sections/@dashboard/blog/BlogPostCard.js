import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
// @mui
import {useNavigate}  from 'react-router-dom'
import { alpha, styled } from '@mui/material/styles';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent, IconButton } from '@mui/material';
import { Tooltip } from 'antd';

// utils
import { fDate } from '../../../utils/formatTime';
import { fShortenNumber } from '../../../utils/formatNumber';
//
// import SvgColor from '../../../components/svg-color';
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------


const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const StyledTitle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const StyledInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ post, index }) {
  
// -------------------------------This is for Bookmark function---------------------------------------//
const [isSaved, setIsSaved] = useState(false); // State to track saved status
const [bookmark, setIsBookmark] = useState([]);
console.log(bookmark)

useEffect(() => {
  Axios.get(`http://localhost:8000/fetchBookmark/${post.userID}`)
    .then((response) => {
      setIsBookmark(response.data)
      // Check if the current post's bookmark is in the user's bookmarks
      if (response.data.some((bookmark) => bookmark.course_id === post.bookmark)) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
      }
    })
    .catch((error) => {
      console.error('Error fetching saved status:', error);
    });
}, [post.bookmark, post.userID]);

const handleClickBookmark = async (event, id) => {

  event.preventDefault();
  setIsSaved((prevState) => !prevState);
  if (isSaved) {
    // If bookmark was saved, remove it from the database
    try {
      const response = await Axios.delete(`http://localhost:8000/deleteCourse/${bookmark}`);
      alert(response.data.message); // Show success message
      // Perform any additional actions after successful deletion, if needed
    } catch (error) {
      console.error('Error deleting course:', error.response?.data?.error);
      alert('Error deleting course.'); // Show error message
    };
  } else {
    // If bookmark was not saved, add it to the database
    Axios.post("http://localhost:8000/bookmark", {
      course_id: post.id,
      user_id: post.userID,
      isSaved: true, // Toggle the saved status
    }).then(() => {
      // alert("Bookmark saved");
    }).catch((error) => {
      console.error('Error saving bookmark:', error);
    });
  }
};

const tooltipTitle = isSaved ? 'Unsave Course' : 'Save Course';
// -------------------------------End for Bookmark function---------------------------------------//



  const { cover, title, view, comment, share, author, createdAt, id } = post;
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;

  const POST_INFO = [
    { number: view, icon: 'eva:people-fill' },
    { number: share, icon: 'eva:share-fill' },
  ];
  const navigate = useNavigate();
  const handleClick = (event, id) => {
    navigate(`/dashboard/overview/${id}`)
  };

  return (
    <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card sx={{ position: 'relative' }}>
        <StyledCardMedia
          sx={{
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >
          <StyledAvatar
            color="paper"
            src="/assets/icons/shape-avatar.svg"
            sx={{
              width: 80,
              left: 0,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
             color: 'background.paper', 
              ...((latestPostLarge || latestPost) && { display: 'none' }),
            }}
          />
          <StyledAvatar
            alt={author.name}
            src={author.avatarUrl}
            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40,
              }),
            }}
          />

          <StyledCover alt={title} src={cover} />
        </StyledCardMedia>

        <CardContent
          sx={{
            pt: 4,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }),
          }}
        >
          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            {fDate(createdAt)}
          </Typography>

          <StyledTitle onClick={(event) => handleClick(event, id)}
            color="inherit"
            variant="subtitle2"
            underline="hover"
            sx={{
              ...(latestPostLarge && { typography: 'h5', height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: 'common.white',
                
              }),
              "&:hover": {
                cursor: "pointer"
              }
            }}
          >
            {title}
          </StyledTitle>

          <StyledInfo>
            {POST_INFO.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: index === 0 ? 0 : 1.5,
                  ...((latestPostLarge || latestPost) && {
                    color: 'grey.500',
               
                  }),
                }}
              >
                <Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
                <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
              </Box>
            ))}
          </StyledInfo>
        </CardContent>
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: isSaved ? 'primary.main' : 'white',
          }}
          onClick={(event) => handleClickBookmark(event, bookmark)}>

          <Tooltip placement="left" title={tooltipTitle}>
            <BookmarkIcon />
          </Tooltip>
        </IconButton>
      </Card>
    </Grid>
  );
}
