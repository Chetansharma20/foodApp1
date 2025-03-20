import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    let navigate = useNavigate()

    
    let submitFormData = (event) => {
        event.preventDefault()
        let formEntries = new FormData(event.target)
        let fromDataObject = Object.fromEntries(formEntries.entries())
        console.log("DATA", fromDataObject)
        // console.log(fromDataObject)


        // console.log(fromDataObject.userName)
        // console.log(fromDataObject.userPassword)


        // let userName = 
        // let pass = "Chetan2008@"


           if( fromDataObject.userName == "chetan@123" && fromDataObject.userPassword == "Chetan2008@" )
           {
                navigate('/Products')
           }
           else
           {
                alert("error incorrect password")
           }
           


    }

    return (
        <div>
            <Typography >Login</Typography>
            <Box sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100%",
                
            }}>


                <Box component="form"
                    onSubmit={(e) => submitFormData(e)}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>

                    <TextField type='text' label="Enter User Name" variant='outlined' name='userName'></TextField>

                    <TextField type='password' label="Enter User Password" variant='outlined' name='userPassword'></TextField>





                    <Button type='submit' variant='contained' color='success' >
                        Login
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default Login