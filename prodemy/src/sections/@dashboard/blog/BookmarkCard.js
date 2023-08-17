import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
// utils
import { fDate } from '../../../utils/formatTime';
import { fShortenNumber } from '../../../utils/formatNumber';
//
import SvgColor from '../../../components/svg-color';
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

BookmarkCard.propTypes = {
     post: PropTypes.object.isRequired,
     index: PropTypes.number,
};




export default function BookmarkCard({ post, index }) {
     // -------------------------------This is for Bookmark function---------------------------------------//

     // -------------------------------End for Bookmark function---------------------------------------//

     const navigate = useNavigate();
     const handleClick = () => {
          navigate("/dashboard/courses");
     }

     console.log(post);

     const { cover, title, desc, view, comment, share, author, createdAt } = post;
     const latestPostLarge = index === 0;
     const latestPost = index === 1 || index === 2;

     const POST_INFO = [
          { number: comment, icon: 'eva:message-circle-fill' },
          { number: view, icon: 'eva:eye-fill' },
          { number: share, icon: 'eva:share-fill' },
     ];

     return (
          <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
               <Card sx={{
                    position: 'relative',
                    boxShadow: "5px 5px 5px rgba(32, 33, 37, .1)",
                    border: "1px solid #dbdce0",
                    borderRadius: "8px",
                    transition: "0.5s",
                    '&:hover': {
                         transform: "translateY(-5px)",
                         boxShadow: "10px 10px 5px rgba(32, 33, 37, .06)",
                    }
               }}>

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
                         }
                         }
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

                         <StyledTitle
                              color="inherit"
                              variant="subtitle2"
                              underline="hover"
                              sx={{
                                   ...(latestPostLarge && { typography: 'h5', height: 30 }),
                                   ...((latestPostLarge || latestPost) && {
                                        color: 'common.white',
                                        height: 30

                                   }),
                              }}
                              onClick={handleClick}>
                              {title}
                         </StyledTitle>

                         {/* <StyledInfo>
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
                         </StyledInfo> */}
                    </CardContent>

               </Card>
          </Grid>
     );
}
