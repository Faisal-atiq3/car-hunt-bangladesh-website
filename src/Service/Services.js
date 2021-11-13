import React, { useEffect, useState } from 'react';
import Service from './Service';
import "./Services.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const Services = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('https://pure-escarpment-37215.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])

    return (
        <Container>
        <Typography sx={{ textAlign: 'center', fontWeight: 500, m: 2 }} variant="h6" gutterBottom component="div">
       Our Services
     </Typography>
        <Typography sx={{ textAlign: 'center', fontWeight: 600 , m: 3 }} variant="h3" gutterBottom component="div">
       Services We Provide
     </Typography>
           <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     {
    services.map(service => <Service
    key={service.id}
    service={service}
    ></Service>)
}
        
       
     </Grid>
   </Box>
     </Container>
    );
};

export default Services;

// {
//     services.map(service => <Service
//     key={service.id}
//     service={service}
//     ></Service>)
// }