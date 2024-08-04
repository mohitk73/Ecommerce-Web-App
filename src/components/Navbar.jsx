import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 
import { CiSearch } from 'react-icons/ci';
import { IoBagHandleOutline } from 'react-icons/io5';
import { IoMdContact } from 'react-icons/io';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">3legant.</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
        <div className="nav-icons">
          <CiSearch style={{ fontSize: '20px', marginRight: '10px' }} />
          <IoBagHandleOutline style={{ fontSize: '20px', marginRight: '10px' }} />
          <IoMdContact style={{ fontSize: '20px', marginRight: '50px' }} />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;


