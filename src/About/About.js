import React from 'react';
import './About.css'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';
import about from '../Images/about.jpg'
const About = () => {
    return (
       
        <Container>
        <br /> <br />
         <Typography variant ='h1' style={{  textAlign: 'center', color: 'black', fontSize:40, fontWeight: 500}}>
            About Us 
        </Typography>
        
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
        <img style={{width: 500,}}
        src={about} alt=""  />
        </Grid>
        <Grid item xs={4}>
        <Typography>
        <h5>The Car Hunt Bangladesh Trust started its journey in June 1980 with a noble vision “To serve the humanity”. The trust has agreed upon to provide healthcare service to the people of Bangladesh at affordable cost. At the early of its commencement, few dedicated social workers of Bangladesh came together and had been united with a strong determination to serve people of the country, the compatriots. That ambition was materialized in the form of “ Car Hunt Bangladesh Trust”.</h5>
        </Typography>
        <Typography>
        <h5>
                At the time of launching, the trust was an institute of 13 employees including Physicians, Technical and Administrative staffs. Over the period of time, by the grace of almighty Allah Subhanahu Wa Tala, The Car Hunt Bangladesh Trust is now a name of ‘TRUST’ in the sector of health care in Bangladesh and is one of the largest health service provider in South Asia.
                </h5>
        </Typography>
        <br />
        <Typography>
        <h5>
                The laboratory and imaging reports of Care Hospital Diagnostic centers are well accepted in Singapore General Hospital, Mount Elizabeth Hospital Singapore, Bumrungrad International Hospital Thailand and other reputed hospitals of Asia. It has been possible because of using latest analyzer and imaging machineries of medical science in Ibn Sina Diagnostic Centers. Well educated and the most experienced reporting consultants are working hard here to verify the reports.
                </h5>
        </Typography>
        <br /> <br />
          
        </Grid>
     
      </Grid>
    </Box>
      </Container>
    );
};

export default About;



{/* <h4>The Care Hospital Trust started its journey in June 1980 with a noble vision “To serve the humanity”. The trust has agreed upon to provide healthcare service to the people of Bangladesh at affordable cost. At the early of its commencement, few dedicated social workers of Bangladesh came together and had been united with a strong determination to serve people of the country, the compatriots. That ambition was materialized in the form of “ Care Hospital Trust”.</h4>
                <br /> <br/>
                <h4>
                At the time of launching, the trust was an institute of 13 employees including Physicians, Technical and Administrative staffs. Over the period of time, by the grace of almighty Allah Subhanahu Wa Tala, the Care Hospital Trust is now a name of ‘TRUST’ in the sector of health care in Bangladesh and is one of the largest health service provider in South Asia.
                </h4>
                <br /> <br />
                <h3>
                The laboratory and imaging reports of Care Hospital Diagnostic centers are well accepted in Singapore General Hospital, Mount Elizabeth Hospital Singapore, Bumrungrad International Hospital Thailand and other reputed hospitals of Asia. It has been possible because of using latest analyzer and imaging machineries of medical science in Ibn Sina Diagnostic Centers. Well educated and the most experienced reporting consultants are working hard here to verify the reports.
                </h3> */}