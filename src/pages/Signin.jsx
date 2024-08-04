import React from 'react';
import { Link } from 'react-router-dom';
import signup from '../assets/signup.jpg';
import './Signup.css';
function Signin() {
    return (
        <div className="signup-container">
            <div className="signup-image">
                <img src={signup}></img>
            </div>
            <div className="signup-form">
                <h2>Sign In</h2>
                <p>Don't Have an Account?<Link className='sign' to="/signup">Sign up</Link></p>
                <form>
                    <input type="text" name="name" placeholder="Your username or Email address" /><br />
                    <input type="password" name="password" placeholder="Password" /><br />
                    <p className="forgot">Forgot Password?</p>
                    <Link type='submit' className='signin' to="/">Sign In</Link>
                </form>
            </div>
        </div>
    )
}
export default Signin;