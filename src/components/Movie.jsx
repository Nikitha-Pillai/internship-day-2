import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img1 from '../assets/kgf.png';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Movie = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 300, margin: 'auto' }} style={{marginTop : '20px'}}>
        <CardContent>
      <Typography variant="body2">
            {'Movie'}
          </Typography>
          </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={img1} 
          alt="Movie"
          sx={{ 
           width: '100%',  
            maxHeight: '200px',
            objectFit: 'contain', 
            display: 'block', 
           
          
          }}  
        />
        <CardContent>
        
          <Typography variant="h5" component="div">
            K{bull}G{bull}F
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            CHAPTER I
          </Typography>
          <Typography variant="body2">
            {'Starring : Yash Gowda'}
          </Typography>
        </CardContent>
      </Card>
      <button style={{marginTop : '20px',borderColor:'blue',backgroundColor:'white'}}>Watch</button>
    </div>

  );

}

export default Movie;
