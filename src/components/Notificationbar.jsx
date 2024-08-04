import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import './Notificationbar.css'; 

function Notificationbar() {
  return (
    <h2>
      30% off storewide - Limited time! 
      <Link to="/shop">
      Shop Now <HiArrowRight />
    </Link>
    </h2>
  );
}

export default Notificationbar;

