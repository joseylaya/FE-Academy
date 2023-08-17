import React from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";

// sections
import {
 
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
  HeroDashboard,
  AboutHome,
} from '../sections/@dashboard/app';
import { LoaderDash } from '../middleware/loaders/loader';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/content");
  }

  const [delayed, setDelayed] = React.useState(true)
  setTimeout(() => {
    setDelayed(false);
  }, 3000);

  return (
    <>
      <Helmet>
        <title> Procademy | Minimal UI </title>
      </Helmet>

      {delayed === true ? <LoaderDash /> : <> <Box maxWidth="100%">
        <HeroDashboard />
      </Box>

        <Box maxWidth="1200px" className="item" sx={{ padding: "100px 0px", margin: 'auto' }}>
          <AboutHome />
        </Box>
      </>
      }




      {/* <Box maxWidth="100%">
        <CtaDashboard />
      </Box>
      <Box maxWidth="1200px" className="item" sx={{ padding: "20px 0px", margin: 'auto' }}>
        <PopoualrCourseDashboard />
      </Box> */}

    </>
  );
}
