import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../reduxwork/RegisterSlice'

const Login = () => {
    let navigate = useNavigate()
    let dispatcher = useDispatch()

    let submitFormData = (event) => {
        event.preventDefault()
        let formEntries = new FormData(event.target)
        let fromDataObject = Object.fromEntries(formEntries.entries())

        dispatcher(login(fromDataObject))
        navigate("/products")
    }

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                backgroundColor: "#ffa726", // Soft orange background
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 3,
                textAlign: "center",
                padding: "0 16px",
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    color: "white",
                    fontWeight: "bold",
                }}
            >
                Login
            </Typography>

            <Box
                component="form"
                onSubmit={(e) => submitFormData(e)}
                sx={{
                    width: "100%",
                    maxWidth: "400px",
                    backgroundColor: "white",
                    padding: "30px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <TextField
                    type="text"
                    label="Enter User Email"
                    variant="outlined"
                    name="userEmail"
                    fullWidth
                    required
                    sx={{
                        backgroundColor: "#f5f5f5",
                    }}
                />
                <TextField
                    type="password"
                    label="Enter User Password"
                    variant="outlined"
                    name="userPassword"
                    fullWidth
                    required
                    sx={{
                        backgroundColor: "#f5f5f5",
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    sx={{
                        fontWeight: "bold",
                        backgroundColor: "#388e3c",
                        "&:hover": { backgroundColor: "#2c6e29" },
                        padding: "12px",
                        borderRadius: "20px",
                    }}
                >
                    Login
                </Button>
            </Box>
        </Box>
    )
}

export default Login
