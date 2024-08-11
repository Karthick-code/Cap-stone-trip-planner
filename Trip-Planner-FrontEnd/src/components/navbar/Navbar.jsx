import React from 'react'
import { AppBar, Toolbar,IconButton,Button,Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Explore & Go
        </Typography>
        
        <>
          <Button color='inherit' component={Link} to='/login'>Login</Button>
          <Button color='inherit' component={Link} to='/signup'>signup</Button>
        </>
                
      </Toolbar>
    </AppBar>
  )
}

export default Navbar