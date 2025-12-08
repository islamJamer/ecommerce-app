import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Menu, MenuItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import NavLink from "./NavLink";
import { navbarItems } from "./consts";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            <NavLink to="/">KAShop</NavLink>
          </Typography>

          <Box
            sx={{ flex: 1, display: "flex", gap: 2, justifyContent: "center" }}
          >
            {navbarItems.map(({ title, path }) => (
              <NavLink key={title} to={path}>
                {title}
              </NavLink>
            ))}
          </Box>

          <IconButton
            component={RouterLink}
            to="/cart"
            color="inherit"
            aria-label="cart"
            sx={{ mr: 1 }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Button color="inherit" onClick={handleClick}>
            Login
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem
              component={RouterLink}
              to="/auth/login"
              onClick={handleClose}
            >
              Login
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/auth/register"
              onClick={handleClose}
            >
              Register
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
