import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';




const Register = () => {
    const {signInEmail,updateUser}=useAuth();
    const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || '/dashboard';


const [errorMessage,setErrorMessage]= useState('');
const [name, setName] = useState({});
const [email,setEmail] = useState({});
const [password, setPassword]=useState({});





    const forSubmit = e => {e.preventDefault();}

    const handleName = e =>{
        setName (e.target.value);
    }


    const handleEmail = e=>{
        setEmail(e.target.value);
    }

    const  handlePassword = e=>{
        setPassword(e.target.value);
    }

    const handleSubmit = ()=>{
        signInEmail(name,email, password)
        .then((userCredential) => {
            updateUser(name);
            history.push(redirect_uri);
           
            
          })
          .catch((error) => {
            setErrorMessage(error.message)
          });
        
        
    }



    return (
        <div>
            <h1 className="text-primary">Please Register</h1>
             <form className="mx-auto w-50"  onSubmit={forSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="name" onBlur={handleName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text"></div>
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" onBlur={handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text"></div>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" onBlur={handlePassword} class="form-control" id="exampleInputPassword1"/>
        </div>
        <h5 className="text-danger"> {errorMessage}  </h5>
        <button type="submit" onClick={handleSubmit} class="btn btn-primary">Register</button>
        <br /> <br />
        
            <h5>Already have an account? <Link to='/login'>Log In</Link></h5>
        <br /> <br /> <br />
        
      
      </form>

      

        </div>
       
    );
};

export default Register;