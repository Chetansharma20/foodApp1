import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/OIPLogo.jpeg";
import ListIcon from "@mui/icons-material/List";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const MyAppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const navigate = useNavigate();
  const { cartItemsCount } = useSelector((state) => state.cart);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "orange",
          px: 3,
          py: 1,
          boxShadow: 4,
        }}
      >
        <Toolbar disableGutters>
          {/* Drawer Icon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <ListIcon />
          </IconButton>

          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              mx: 2,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <List sx={{ display: "flex" }}>
              {[
                { label: "Home", route: "/" },
                { label: "About", route: "/about" },
                { label: "Register", route: "/register" },
                { label: "Products", route: "/products" },
                { label: "Orders", route: "/orders" },
                { label: "Profile", route: "/profile" },
              ].map((item) => (
                <ListItem
                  key={item.label}
                  onClick={() => navigate(item.route)}
                  sx={{
                    cursor: "pointer",
                    mx: 1.5,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Typography variant="button">{item.label}</Typography>
                </ListItem>
              ))}

              {/* Cart with badge */}
              <ListItem
                onClick={() => navigate("/carts")}
                sx={{
                  cursor: "pointer",
                  mx: 1.5,
                  display: "flex",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "#fff", transform: "scale(1.05)" },
                }}
              >
                <Badge badgeContent={cartItemsCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </ListItem>
            </List>
          </Box>

          {/* Login Button */}
          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            sx={{
              backgroundColor: "white",
              color: "orange",
              borderRadius: 20,
              textTransform: "none",
              fontWeight: "bold",
              px: 3,
              py: 1,
              fontSize: "16px",
              "&:hover": { backgroundColor: "#ffe0b2", color: "orange" },
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: { width: 250, backgroundColor: "#fff", paddingTop: 2 },
        }}
      >
        <List>
          {/* Drawer Links */}
          {[
            { label: "Home", icon: <HomeIcon />, route: "/" },
            { label: "Products", icon: <InventoryIcon />, route: "/products" },
            { label: "Contact", icon: <AddIcCallIcon />, route: "/contact" },
          ].map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() => {
                navigate(item.route);
                handleDrawerClose();
              }}
              sx={{
                "&:hover": {
                  backgroundColor: "orange",
                  color: "white",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MyAppBar;
