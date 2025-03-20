import { AppBar, Box, Button, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/OIPLogo.jpeg'
const MyAppBar = () => {
    let navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{backgroundColor:'orange'}}>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
             <Box 
             component= "img"
             src={logo}
             alt="Logo"
             sx={{width: 40, height: 40, borderRadius: '50%'}}/>
                {/* <MenuIcon /> */}
            </IconButton  >
            
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%"
            }}>
                <List sx={{
                    display: "flex",
                    cursor: "pointer"
                }}>
                    <ListItem onClick={() => navigate("/")}>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem onClick={() => navigate("/about")}>
                        <ListItemText>About</ListItemText>
                    </ListItem>
                    <ListItem onClick={() => navigate("/contact")}>
                        <ListItemText>Contact</ListItemText>
                    </ListItem>

                    <ListItem onClick = {()=>navigate("/register")}>
                        <ListItemText>Register</ListItemText>
                    </ListItem>
                    <ListItem onClick = {()=>navigate("/login")} sx={{position:'relative', left:'350px', borderRadius:5, backgroundColor:'InfoText',px:'20px'}}>
                        <ListItemText>Login</ListItemText>
                    </ListItem>
                    <ListItem onClick = {()=>navigate("/products")}>
                        <ListItemText>Products</ListItemText>
                    </ListItem>
                    <ListItem onClick = {()=>navigate("/orders")}>
                        <ListItemText>Orders</ListItemText>
                    </ListItem>
                    <ListItem onClick = {()=>navigate("/carts")}>
                        <ListItemText>Carts</ListItemText>
                    </ListItem>
                    <ListItem onClick = {()=>navigate("/profile")}>
                        <ListItemText>Profile</ListItemText>
                    </ListItem>
                </List>
            </Box>

            {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
    </AppBar>
</Box>
  )
}

export default MyAppBar