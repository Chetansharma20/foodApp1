import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFE0B2", // Light orange, matching AppBar/Home vibe
        width: "100%",
        height: "600px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4E342E', // Dark brown text color for nice contrast
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "600px", fontSize: "1.2rem" }}>
        Welcome to our platform! We are passionate about delivering amazing products and unforgettable experiences.
        Our goal is to make your journey with us smooth, inspiring, and satisfying.
      </Typography>
    </Box>
  );
};

export default About;
