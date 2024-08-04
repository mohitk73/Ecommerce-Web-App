import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import aboutimage from '../assets/aboutimage.jpg';
function About(){
    return(
        <div className='about-container'>
            <div className='about-image'>
                <img src={aboutimage}></img>

            </div>
            <div className='about-content'>
                <p className='sale'>SALE UP TO 35% OFF</p>
                <h2>HUNDREDS of</h2>
                <h2>New Lower Prices!</h2>
                <p>It’s more affordable than ever to give every </p>
                <p>room in your home a stylish makeover</p>
                <Link href="#" to="/shop">Shop Now <HiArrowRight/></Link>
            </div>
        </div>
    )
}
export default About;