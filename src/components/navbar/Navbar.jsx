import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KAShop
          </Typography>

          <Box sx={{ mr: 2, display:"flex", gap: 2 }}>
            <Link component={RouterLink} to="/" color='inherit' underline='none'>Home</Link>
            <Link component={RouterLink} to="/about" color='inherit' underline='none'>About</Link>
            <Link component={RouterLink} to="/contact" color='inherit' underline='none'>Contact</Link>
            <Link component={RouterLink} to="/cart" color='inherit' underline='none'>Cart</Link>
            <Link component={RouterLink} to="/blog" color='inherit' underline='none'>Blog</Link>
          </Box>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
