import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import car from '../../src/Images/car.jpg'
import bg from '../../src/Images/background.jpg'
import { Typography } from '@mui/material';

const CarBg= {
  background: `url(${bg})`
}

const Banner = () => {
  return (
    <Box style ={CarBg} sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <img style={{width: 1000,}}
        src={car} alt=""  />
      </Grid>
      <Grid item xs={6} md={4} sx={{
        display:'flex', 
        justifyContent: 'flex-start',
        textAlign:'left',
        alignItems:'center'}}>
       <Box>
       <Typography variant ='h1' style={{color: 'white', fontSize:40, fontWeight: 500}}>
            Beacuse Every Details Counts 
        </Typography>
        <Typography variant ='h6' style={{color: 'red', fontWeight: 400}}>
            We'll help you drive in style
        </Typography>
        <Button variant="contained" style={{backgroundColor:'#8E44AD'}}>
          Learn More
        </Button>
       </Box>
      
      </Grid>
      
      
    </Grid>
  </Box>
  );
};

export default Banner;