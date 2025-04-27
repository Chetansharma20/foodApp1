import { Typography, Box } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#ffa726", // Matching orange
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        textAlign: 'center',
      }}
    >
      <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
        Contact Us
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <EmailIcon />
        <Typography variant='h6'>support@yourapp.com</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <PhoneIcon />
        <Typography variant='h6'>+91 9876543210</Typography>
      </Box>
    </Box>
  )
}

export default Contact
