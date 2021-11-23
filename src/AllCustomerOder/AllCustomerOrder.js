import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Container } from '@mui/material';
import Service from '../Service/Service';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCustomerOrder = () => {

    const [services,setServices]= useState([])

    useEffect(()=>{
        fetch('https://pure-escarpment-37215.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])




    return (

            
        <Container>
        
        <Typography sx={{ textAlign: 'center', fontWeight: 600 , m: 3 }} variant="h3" gutterBottom component="div">
       Our Products
     </Typography>
           <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     {
    services.map(service =>(





        <Grid item xs={4} sm={4} md={4} >
        <Card sx={{ minWidth: 275,border: 0,boxShadow: 1 }}>
  <CardContent>
  <CardMedia
    component="img"
    style={{}}
    image={service.img}
    alt="Paella dish"
  />
    <Typography sx={{textAlign: 'center',mb:1}} variant="h5" component="div">
     {service.name}
    </Typography>
    <Typography sx={{ textAlign: 'center',fontWeight: 600 , mb: 1.5 }} color="text.secondary">
     {service.description}
    </Typography>
    <Typography sx={{ textAlign: 'center', fontWeight: 600 , mb: 1.5 }} color="text.secondary">
      Price: {service.price}
    </Typography>
  <Typography sx={{ textAlign: 'center'}}>
  <Link to={`/booking/${service._id}`}>
    <Button  variant="contained" style={{ backgroundColor:'#CB4335'}}>
      Buy Now
    </Button>
    </Link>
  </Typography>
    
  </CardContent>
  
</Card>
    </Grid>










    ) )
}
        
       
     </Grid>
   </Box>
     </Container>



        
    );
};

export default AllCustomerOrder;






