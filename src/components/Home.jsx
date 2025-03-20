import { hexToRgb, Box, Typography } from '@mui/material'
import React from 'react'
import img from '../assets/images/formonix/color-1909977_640.webp'
const Home = () => {
  return (
    // <div>Home</div>
<>
    {/* <Box 
             component= "img"
             src={img}
             alt="img"
             sx={{width: "100%", height: '100%' ,objectFit: "cover"}}
                /> */}


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
        backgroundSize: "cover",  // Ensures the image covers the entire screen
      }}
    >
      {/* <img src={img} alt="" sx={{ width:'100px'}}/> */}

 
      <Typography variant='h1' >Home</Typography>



    </Box>

    </>
  )
}

export default Home