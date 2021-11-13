import React from 'react';
import { Container, Navbar, Nav, Button, Img } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
const Menubar = () => {
  const {user, logOut, name}= useAuth();
  return (
    <>
  <Navbar bg="dark" variant="dark" sticky="top"collapseOnSelect expand="lg">
    <Container>
    
    <Navbar.Brand href="#home">Car Hunt Bangladesh</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
    {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
    
      <Nav.Link  as={HashLink} to="/home#services">Services</Nav.Link>
      {/* <Nav.Link as={Link} to="/contuctUs">Contuct Us</Nav.Link> */}
      {
        user?.email &&
        <Nav.Link as={Link} to="/addService">Add a Service</Nav.Link>
      }
      {
        user?.email &&
        <Nav.Link as={Link} to="/manageService">Manage Service</Nav.Link>
      }
      {
        user?.email &&
        <Nav.Link as={Link} to="/dashboard">DashBoard</Nav.Link>
      }
      {
        user?.email &&
        <Nav.Link as={Link} to="/profile">My Order</Nav.Link>
      }
      {/* <Nav.Link as={Link} to="/career">Career</Nav.Link> */}
      {/* <Nav.Link  as={HashLink} to="/home#experts">Experts</Nav.Link> */}

      {user?.email?

       <Button onClick={logOut} variant="danger">Logout</Button>:

      <Nav.Link  as={Link} to="/login">Login</Nav.Link>}
      <Navbar.Text>
        {
          user?.email && 
          <h6>{user.displayName || name}</h6>
        }
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
  

  
  
</>
  );
};

export default Menubar;