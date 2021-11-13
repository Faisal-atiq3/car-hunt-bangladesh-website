import React from 'react';

const ContuctUs = () => {
    return (
      
        <form  className="mx-auto w-50">
          <h2 className="text-primary">Your Contact </h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"> Your Name:</label>
          <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email Address:</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"> Your Message:</label>
          <input type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" class="btn btn-primary">Send Us</button>
      </form>
    );
};

export default ContuctUs;