import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';
import contractUs from '../Images/contract.jpg'



const ContuctUs = () => {
    return (
      <Container>
        <br /> <br />
         <Typography variant ='h1' style={{  textAlign: 'center', color: 'black', fontSize:40, fontWeight: 500}}>
            Contract Us 
        </Typography>
        
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
        <img style={{width: 500,}}
        src={contractUs} alt=""  />
        </Grid>
        <Grid item xs={4}>
        <TextField id="standard-basic" label="Name" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Your Masaage" variant="standard" />
        <br />
        
        <br />
        <Button  variant="contained" style={{ backgroundColor:'#0B37FF '}}>
          Send
        </Button>
        <br /> <br />
          
        </Grid>
     
      </Grid>
    </Box>
      </Container>
        
       
    );
};

export default ContuctUs;