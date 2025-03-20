import {
    Box, Button, FormControl,FormControlLabel, Radio,FormLabel, TextField, RadioGroup, Typography, 
    ListItem,
    ListItemText,
    List} from '@mui/material'

import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
// import { RegisterForm } from '../reduxwork/RegisterSlice'
// import { LogOut } from '../reduxwork/RegisterSlice'
import { useDispatch } from 'react-redux'
import { RegisterForm } from '../reduxwork/RegisterSlice'
const Register = () => {
    let navigate = useNavigate()
    let dispatcher = useDispatch()
// let data = []

let submitFormData = (event) =>
    {
event.preventDefault()
let formEntries = new FormData(event.target)
let fromDataObject = Object.fromEntries(formEntries.entries())
console.log("DATA", fromDataObject)
// data.push(fromDataObject)
// console.log(data)
dispatcher(RegisterForm(fromDataObject))

event.target.reset();


    }
    return (
        <>
            <Typography variant='h4'>Register User</Typography>

            <Box sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100%"
            }}>
                <Box component="form"
                    onSubmit={(e) => submitFormData(e)}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}>
                    <TextField type='text' label="Enter User Name" variant='outlined' name='userName'></TextField>
                    <TextField type='email' label="Enter User Email" variant='outlined' name='userEmail'></TextField>
                    <TextField type='tel' label="Enter User Mobile" variant='outlined' name='userMobile'></TextField>
                    <TextField type='password' label="Enter User Password" variant='outlined' name='userPassword'></TextField>

                    <FormControl>
                        <FormLabel id="gender">Gender</FormLabel>
                        <RadioGroup
                            row
                            defaultValue="female"
                            name="gender"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    <Button type='submit' variant='contained' color='success'>
                        Register
                    </Button>
               
                    <Typography variant="body2" align="center" >
                        Already registered? <Button variant='text' onClick = {()=>navigate("/login")}>Login</Button>
                    </Typography> 
                   
                    
                    
                </Box>
            </Box>
        </>
    )
}

export default Register