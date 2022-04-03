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
      
         <Link style={{color:"white",marginLeft:"5%"}} to="/books">Books</Link>
         <Link style={{color:"white",marginLeft:"5%"}} to="/re-search-articles">Re-search articles</Link>
         <Link style={{color:"white",marginLeft:"5%"}} to="/comics">Comics</Link>
         <Link style={{color:"white",marginLeft:"5%"}} to="/stories">Stories</Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
