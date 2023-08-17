import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
// faker 
import { faker } from '@faker-js/faker';

import Iconify from '../components/iconify';

import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';
// data
import CourseData from '../_mock/courseData'

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------
export default function BlogPage() {

  const coursedata = CourseData().courses;
  const storedUserId = sessionStorage.getItem('userId');

  let posts = []; 

  if (coursedata && coursedata.length > 0) {
        posts = coursedata.map((course, index) => ({
        id: course.id,
        cover: `/assets/images/covers/cover_${index + 1}.jpg`,
        title: course.courseName,
        createdAt: course.date_created,
        view: course.enrollees,
        comment: faker.datatype.number(),
        bookmark: course.id,
        share: faker.datatype.number(),
        favorite: faker.datatype.number(),
        userID: storedUserId,
        author: {
          name: faker.name.fullName(),
          avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
        },
      }));
    }

  return (
    <>
      <Helmet>
        <title> Dashboard: Blog | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={posts} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))
          ) : (
            <Typography variant="h4" gutterBottom>
              No posts available
            </Typography>
          )}
        </Grid>
      </Container>
    </>
  );
}
