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
         <Link style={{color:"white",marginLeft:"5%"}} to="/comics/id=3">Comics</Link>
         <Link style={{color:"white",marginLeft:"5%"}} to="/stories">Stories</Link>
         <Link style={{color:"white",marginLeft:"5%"}} to="/high-order-comp-example">High order-components</Link>
         <Link style={{color:"white",marginLeft:"5%"}} to="/render-props-example">Render Props</Link>
         <Link style={{color:"white",marginLeft:"5%"}} to="/context-hook-example">Context Hook</Link>
         <Link style={{color:"white",marginLeft:"5%"}} to="/render-props-example">Use Reducer</Link>
         <Link style={{color:"white",marginLeft:"5%"}} to="/use-context-example">Use Context</Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
