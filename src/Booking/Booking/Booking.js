import React, { useEffect, useState } from 'react';

import { Button, Card,Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css'
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Booking = () => {
    const{serviceId}=useParams();
    const [service, setService] =useState([]);
    const [address, setAddress] =useState('');
    const [number, setNumber]= useState('');
    const {user}= useAuth();



    useEffect(()=>{
        fetch('https://pure-escarpment-37215.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setService(data));
        
        
        
    },[])

    
      const reamainOrder = service.filter(order=>order._id === serviceId);
    //  console.log(reamainOrder)
     
     const name = reamainOrder[0]?.name;
     const description = reamainOrder[0]?.description;
     const price = reamainOrder[0]?.price;
     const img =reamainOrder[0]?.img;
     const email = user.email
     
     


     const orderData = { name, description, price , img,  email, address, number}



    




    const onSubmitButton = () => {
      
        console.log(orderData);
      axios.post('https://pure-escarpment-37215.herokuapp.com/AllOrder',orderData)
      .then(res=> {
          // if (res.data.insertedId){
          //     alert('Added Successfully')
            
          // }
      })
  }

    const handleAddress = e =>{
      setAddress(e.target.value);
    }

    const handleNumber = e => {
      setNumber(e.target.value);
    }

    const exactService =service.filter (item=> item._id===serviceId );

    return (
        <div className="mx-auto w-50">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={exactService[0]?.img} />
  <Card.Body>
    <Card.Title>{exactService[0]?.name}</Card.Title>
    <Card.Text>
      {exactService[0]?.description}
    </Card.Text>
    <Card.Text>
      <h5>Price: {exactService[0]?.price}</h5>
    </Card.Text>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control onBlur={handleAddress} type="text" placeholder="Enter Your Adress" required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control onBlur={handleNumber} type="text" placeholder="Enter Your Phone Number" required />
    </Form.Group>
    <div className= 'details-button d-flex justify-content-between '>
    <Button variant="primary"><Link to ='/home'>Go Back</Link></Button>
    <Button variant="success " onClick={onSubmitButton}><Link to ='/profile'>Review Order</Link></Button>
    </div>
      
    
    
  </Card.Body>
</Card>

        </div>
    );
};

export default Booking;