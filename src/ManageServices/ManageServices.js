import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ManageServices = () => {
    const [services, setServices]= useState([])
    useEffect( ()=>{
        fetch('https://gory-alien-54575.herokuapp.com/AllOrder')
        .then(res=>res.json())
        .then(data =>setServices(data))

    },[])

    const handleDelete =id=>{
        const url= `https://gory-alien-54575.herokuapp.com/AllOrder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then (data=> {
            console.log(data)
            if (data.deletedCount){
                alert('deleted')
                const remaining  =services.filter(service => service._id !== id);
            setServices(remaining);
            }
            
        })
    }
    return (
        <div>
            <h2>Manage Service</h2>
            {
                services.map(service => (
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service.img} />
  <Card.Body>
    <Card.Title>{service.name}</Card.Title>
    <Card.Text>
      {service.description}
    </Card.Text>
    <Button onClick={()=>handleDelete(service._id)} variant="primary">Delete</Button>
  </Card.Body>
</Card>

                ))
            }
            {/* div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={()=>handleDelete(service._id)}>Delete</button>
                     </div> */}
            
        </div>
    );
};

export default ManageServices;