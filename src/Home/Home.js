import React from 'react';
import Banner from '../Banner/Banner';
import ContructUs from '../Contact Us/ContuctUs'
import Experts from '../Experts/Experts';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
           
            <Experts></Experts>
            <ContructUs></ContructUs>
            

        </div>
    );
};

export default Home;