import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="fixed" style={{backgroundColor:"black"}}>
        <Toolbar>
         <Link style={{color:"white"}} to="/books">Books</Link>
         <Link style={{color:"white"}} to="/books">Re-search articles</Link>
         <Link style={{color:"white"}} to="/books">Comics</Link>
         <Link style={{color:"white"}} to="/books">Stories</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
