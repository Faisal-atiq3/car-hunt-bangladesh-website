import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Profile from '../Profile/Profile';

const CustomerOrdrer = () => {
    const {user}= useAuth();
    const [CutomerOrder, setCustomerOrder]= useState([])


    useEffect(()=>{
        const url = `http://localhost:5000/AllOrder`
        fetch(url)
        .then(res => res.json ())
        .then(data => setCustomerOrder(data));
    },[])
    return (
        <div>
            <h2>
              
            </h2>
            
        </div>
    );
};

export default CustomerOrdrer;