import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios, { Axios } from 'axios';




const AddReview = () => {
    const [clientName , setClientName]= useState('');
    const [review , setReview]= useState('');
    const [rating , setRating]= useState('');
    console.log(clientName)
    const data= { clientName, review, rating}

  


    const handleName = e => {
      setClientName(e.target.value);
      };


      const handleReview = e => {
        setReview(e.target.value);
      };

      
      const handleRating = e => {
        const starValue = e.target.value;
        if (starValue <= 0 || starValue > 5) {
            
        }
        else {
          setRating(starValue);
        }
    }

    const handleOnSubmint= e =>{
        
         axios.post('https://pure-escarpment-37215.herokuapp.com/review', data )
         .then(res=>{
             if (res.data.insertedId){
                 alert('Added Successfully')
                 e.target.reset();
             }
              })
         e.preventDefault()
         
             }

    


             

           
             


    return (
        <Form onSubmit={handleOnSubmint}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Your Name</Form.Label>
    <Form.Control onBlur={handleName}  type="name" placeholder="Your Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Add Your Review</Form.Label>
    <Form.Control onBlur={handleReview}  as="textarea" placeholder='Your Review' rows={3} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Your Rating </Form.Label>
    <Form.Control  onBlur={handleRating}  min={0} max={5}  type="number" placeholder="Your Rating" />
  </Form.Group>


  <button className="btn btn-primary" type='submit'>Submit</button>
</Form>
    );
};

export default AddReview;