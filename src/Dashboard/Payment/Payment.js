import React from 'react';
import PaymentOrder from '../../Images/payment.jpg'
const Payment = () => {
    return (
        <div >
            <img style={{width:'500px', }} src={PaymentOrder} alt="" />
            <h2 style={{width:'500px', textAlign: 'center' }}> Payment Method Coming Soon</h2>
        </div>
    );
};

export default Payment;