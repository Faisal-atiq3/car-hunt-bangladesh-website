import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Expert from '../Expert/Expert';
import client1 from '../Images/people-1.png'
import client2 from '../Images/people-2.png'
import client3 from '../Images/people-3.png'


const experts =[
    {
        id:1,
        name: 'Ayrton Senna ',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem vel sint voluptatem veniam corrupti quisquam, optio eligendi quis quod, illum autem exercitationem ratione hic rerum ex eius porro aspernatur.',
        img : client1
    },
    {
        id:2,
        name: 'Michael Schumacher ',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem vel sint voluptatem veniam corrupti quisquam, optio eligendi quis quod, illum autem exercitationem ratione hic rerum ex eius porro aspernatur.',
        img : client2
    },
    {
        id:3,
        name: 'Lewis Hamilton ',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem vel sint voluptatem veniam corrupti quisquam, optio eligendi quis quod, illum autem exercitationem ratione hic rerum ex eius porro aspernatur.',
        img : client3
    }
    
]

const Experts = () => {
    return (
        <Container>
        <Typography sx={{  textAlign: 'center', fontWeight: 500, m: 2 }} variant="h6" gutterBottom component="div">
       Reviews
     </Typography>
        <Typography sx={{ textAlign: 'center', fontWeight: 600 , m: 3 }} variant="h3" gutterBottom component="div">
       Our Clients Says
     </Typography>
           <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {
                   experts.map(expert =><Expert
        key={expert.name}
         expert={expert}
    
    >
       
   </Expert>)
                }
                </Grid>
    </Box>
      </Container>
        
    );
};

export default Experts;


//  {
//     experts.map(expert =><Expert
//         key={expert.name}
//          expert={expert}
    
//     >
       
//    </Expert>)