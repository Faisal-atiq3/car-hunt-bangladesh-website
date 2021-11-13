import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Expert = ({expert}) => {
    const {name,img,description}= expert;
    
    return (
            <Grid item xs={4} sm={4} md={4} >
              <Card sx={{ minWidth: 275,boxShadow: 3 }}>
        <CardContent style= {{text:'center'}}>
          <CardMedia
            component="img"
        style={{width: 'auto', height: '80px', margin: '0 auto', }}
              image={img}
              alt="Paella dish"
            />
  <Typography sx={{ textAlign: 'center' }}  variant="h5" component="div">
        {name}
  </Typography>
  <Typography sx={{ textAlign: 'center', mb: 1.5 }} color="text.secondary">
   {description}
  </Typography>
  
</CardContent>

</Card>
  </Grid>
        
      











    );
};

export default Expert;


{/* <div className=" container ">
<img src={img} alt="" />
<h1>{name}</h1>
<h4 className="text-danger">{expertize}</h4>
</div> */}