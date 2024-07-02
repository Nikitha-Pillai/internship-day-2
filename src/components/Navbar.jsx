import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
        <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: '200px' }}>
          Movie App
        </Typography>
     <Link to={'/'}> <Button style={{color:'white'}}>View</Button></Link>  
     <Link to={'/add'}><Button style={{color:'white'}}>Add</Button></Link> 
     <Link to={'/movie'}><Button style={{color:'white'}}>Movie</Button></Link> 
      </Toolbar>
    </AppBar>
  </Box>
  
  )
}

export default Navbar