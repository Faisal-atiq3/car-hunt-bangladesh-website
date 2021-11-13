import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';


import useAuth from '../hooks/useAuth';

const Login = () => {





  const {signInUsingGoogle,loginUser} =useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || '/';

   const [errorMessage,setErrorMessage] =useState('');
  const [email,setEmail] = useState({});
  const [password, setPassword]=useState({});
  
  
  const forSubmit = e => {e.preventDefault();}
  
    const handleEmail = e=>{
      setEmail(e.target.value);
}


  const  handlePassword = e=>{
    setPassword(e.target.value);
  }


  const  handleSubmit = ()=>{
    loginUser(email,password)
    .then((userCredential) => {
      history.push(redirect_uri);
      })
      .catch((error) => {
     setErrorMessage(error.message);
    });
  }
  





  return (
    <div id="login  ">
    <h1 className="text-primary">Please Login</h1>
    <div>
    <form className="mx-auto w-75" onSubmit={forSubmit}>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" onBlur={handleEmail} class="form-control" id="exampleInputEmail1"/> 
<div id="emailHelp" class="form-text">.</div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Password</label>
<input type="password" onBlur={handlePassword} class="form-control" id="exampleInputPassword1"/>
</div>
<h5 className="text-danger"> {errorMessage}  </h5>
<button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
<br /> <br />
<h5 >Dont Have Any Account ? Please <Link to ="/register">Register</Link></h5>
<br />
    <div>-------------------------------------------------------</div>
    <button onClick={signInUsingGoogle} className="btn btn-warning"> Google SignIn</button>
    <br /> <br /> <br />

</form>
</div>

    
    
</div>
);
};

    
    
  


export default Login;