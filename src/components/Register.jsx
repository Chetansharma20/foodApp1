import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  FormLabel,
  TextField,
  RadioGroup,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegisterForm } from '../reduxwork/RegisterSlice';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitFormData = (event) => {
    event.preventDefault();
    const formEntries = new FormData(event.target);
    const formDataObject = Object.fromEntries(formEntries.entries());
    dispatch(RegisterForm(formDataObject));
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          background: "linear-gradient(to right, #f9d423, #ff4e50)",
          display: 'flex',
          alignItems: "center",
          justifyContent: "center",
          p: 2
        }}
      >
        <Box
          component="form"
          onSubmit={submitFormData}
          sx={{
            backgroundColor: "white",
            padding: 5,
            borderRadius: 3,
            boxShadow: 5,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            maxWidth: 400,
            width: "100%",
          }}
        >
          <Typography variant='h4' align="center" fontWeight="bold" color="orange" gutterBottom>
            Create Your Account
          </Typography>

          <TextField
            type='text'
            label="Username"
            variant='outlined'
            name='userName'
            fullWidth
          />
          <TextField
            type='email'
            label="Email"
            variant='outlined'
            name='userEmail'
            fullWidth
          />
          <TextField
            type='tel'
            label="Mobile"
            variant='outlined'
            name='userMobile'
            fullWidth
          />
          <TextField
            type='password'
            label="Password"
            variant='outlined'
            name='userPassword'
            fullWidth
          />

          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
             
              name="gender"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          <Button type='submit' variant='contained' color='success' size="large">
            Register
          </Button>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Button variant="text" onClick={() => navigate("/login")} sx={{ color: "orange" }}>
              Login
            </Button>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Register;
