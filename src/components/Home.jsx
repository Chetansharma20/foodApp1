import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import img from '../assets/images/formonix/color-1909977_640.webp';

import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate()
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Blurred overlay behind text for better visibility */}
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",  // semi-transparent black
            padding: 4,
            borderRadius: 3,
            backdropFilter: "blur(5px)",  // blur effect
            boxShadow: 5,
          }}
        >
          <Typography variant='h2' sx={{ fontWeight: "bold", mb: 2 }}>
            Welcome to Our Website
          </Typography>

          <Typography variant='h6' sx={{ mb: 4 }}>
            Discover amazing products, connect with us, and explore more!
          </Typography>

          <Button
            variant="contained"
            color="warning"
            size="large"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: 2,
              px: 4,
              py: 1.5,
            }}
            onClick={() => navigate("/products")}
          >
            Explore Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
