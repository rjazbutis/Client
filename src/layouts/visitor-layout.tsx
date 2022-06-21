import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';

import img1 from '../pages/home-page/images/image1.jpg';

const VisitorLayout: React.FC = () => (
  <>
    <Navbar />
    <Box
      component="main"
      sx={{
        background: `url(${img1})`,
        minHeight: '1000px',
        maxHeight: '100%',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
    >
      <Outlet />
    </Box>
  </>
);

export default VisitorLayout;
