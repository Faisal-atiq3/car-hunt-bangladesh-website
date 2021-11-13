import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const Profile = () => {
  const{serviceId}=useParams();
    const {user}=useAuth();
    const [myOrder, setMyOrder]= useState([]);
    const [orderId, setOrderId]= useState('');
    const  [allService , setAllService] = useState([])



    useEffect(()=>{
      fetch('https://pure-escarpment-37215.herokuapp.com/AllOrder')
      .then(res=>res.json())
      .then(data=>setMyOrder(data));
      
    },[])

    //delete order




    const handleDeleteOrder =id=>{
      const url= `https://pure-escarpment-37215.herokuapp.com/AllOrder/${id}`;
      fetch(url, {
          method: 'DELETE'
      })
      .then(res=>res.json())
      .then (data=> {
          console.log(data)
          if (data.deletedCount){
              alert('deleted')
              const remaining  =allService.filter(service => service._id !== id);
              setAllService(remaining);
          }
          
      })
  }




    const handledate= ()=>{
      const remainingOrder = myOrder.filter(order => order._id === serviceId)
      setMyOrder(remainingOrder);
    }
    const allUserOrder =myOrder.filter(order => order.email ===user.email   )

    // console.log(allUserOrder);



    return ( 
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Status&nbsp;</TableCell>
            <TableCell align="right">Action&nbsp;</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {allUserOrder.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><img style={{width:'100px'}} src={row.img} alt="" srcset="" /></TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right"> <Button onClick={()=>handleDeleteOrder(row._id)} variant="contained">Delete</Button></TableCell>
               
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      

         
        
    );
};

export default Profile;







 

{/* <div className= "mx-auto  "> <h1> My Order</h1>
        {
        allUserOrder.map(selected=>(
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={selected.img} />
  <Card.Body>
    <Card.Title>{selected.name}</Card.Title>
    <Card.Text>
      {selected.description}
    </Card.Text>
    <Button onClick={()=>handleDeleteOrder(selected._id)} >Delete</Button>
  </Card.Body>
</Card>
       ))
      }
      </div> */}