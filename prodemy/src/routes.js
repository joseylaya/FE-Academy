import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import UserPage from './pages/UserPage';
import TownPage from './pages/TownPage';
import PostPage from './pages/PostPage';
import SinglePostPage from './pages/SinglePostPage';
import LoginPage from './pages/LoginPage';
import Course from './pages/CoursePage';
import Blog from './pages/BlogPage';
import Quiz from './pages/quizPage';
import Overview from './pages/CourseOverview';
import Page404 from './pages/Page404';
import CourseContentPage from './pages/CourseContentPage';
import UserProfile from './pages/UserProfile';
import DashboardAppPage from './pages/DashboardAppPage';


// ----------------------------------------------------------------------

const isAuthenticated = () => {
  const token = sessionStorage.getItem('token');
  return token!== null;
};

export default function Routes() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: isAuthenticated() ? <DashboardLayout /> : <Navigate to ="/login" />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'town', element: <TownPage /> },
        { path: 'course', element: <Course /> },
        { path: 'post', element: <PostPage /> },
        { path: 'quiz', element: <Quiz /> },
        { path: 'courses', element: <Blog /> },
        { path: 'view_profile', element: <UserProfile /> },
        { path: 'overview/:id', element: <Overview /> },
        { path: 'content/:id', element: <CourseContentPage /> }
        // { path: 'post/:id', element: <SinglePostPage /> },
  
      ],
    },
    {
      path: 'login',
      element: isAuthenticated() ? <Navigate to ="/dashboard" /> : <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
