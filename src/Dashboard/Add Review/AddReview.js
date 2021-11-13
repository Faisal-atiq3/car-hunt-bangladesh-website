import React from 'react';
import { Button, Form } from 'react-bootstrap';
;


const AddReview = () => {
    return (
        <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="name" placeholder="Your Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Add Your Review</Form.Label>
    <Form.Control as="textarea" placeholder='Your Review' rows={3} />
    <Form.Control as="number" placeholder='Your Rating' rows={3} />
  </Form.Group>
  <button className="btn btn-primary">Submit</button>
</Form>
    );
};

export default AddReview;