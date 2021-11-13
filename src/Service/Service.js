import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';

const Service = ({service}) => {
    const {_id, name, description, img, price } =service;
    return (
      <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275,border: 0,boxShadow: 1 }}>
      <CardContent>
      <CardMedia
        component="img"
        style={{}}
        image={img}
        alt="Paella dish"
      />
        <Typography sx={{textAlign: 'center',mb:1}} variant="h5" component="div">
         {name}
        </Typography>
        <Typography sx={{ textAlign: 'center',fontWeight: 600 , mb: 1.5 }} color="text.secondary">
         {description}
        </Typography>
        <Typography sx={{ textAlign: 'center', fontWeight: 600 , mb: 1.5 }} color="text.secondary">
          Price: {price}
        </Typography>
      <Typography sx={{ textAlign: 'center'}}>
      <Link to={`/booking/${_id}`}>
        <Button  variant="contained" style={{ backgroundColor:'#CB4335'}}>
          Buy Now
        </Button>
        </Link>
      </Typography>
        
      </CardContent>
      
    </Card>
        </Grid>
        
    );
};

export default Service;



{/* <div className ="service pb-3">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p className="p-3">{description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-primary">Details</button>
            </Link>
           
        </div> */}

        // <Link to={`/booking/${_id}`}>
        //     <button className="btn btn-primary">Order Now</button>
        //     </Link>

        