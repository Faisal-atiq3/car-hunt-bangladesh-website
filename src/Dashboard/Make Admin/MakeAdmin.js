import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios, { Axios } from 'axios';

const MakeAdmin = () => {
    const [email, setEmail]= useState('');
    
    const handleOnBlur = e =>{
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    const handleAdminSubmint= e =>{
       const adminData = {useremail: email}
        axios.post('https://pure-escarpment-37215.herokuapp.com', adminData)
        .then(res=>{
            if (res.data.insertedId){
                alert('Added Successfully')
                e.target.reset();
            }
             })
        e.preventDefault()
        console.log(adminData)
            }
    
        
        
        
    



    return (
        <div  style={{textAlign: 'center'}}>
            <h2> Add Your Admin Panel</h2>
            <form onSubmit={handleAdminSubmint}>
            <TextField  label="Email"
            type="email"
            onBlur={handleOnBlur}
             variant="standard" />
             <br /> <br />
            <Button type="submit" variant="contained"> Make Admin</Button>



            </form>
        </div>
    );
};

export default MakeAdmin;




