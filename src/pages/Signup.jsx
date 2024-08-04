import React from 'react';
import { Link } from 'react-router-dom';
import signup from '../assets/signup.jpg';
import './Signup.css';
function Signup() {
    return (
        <div className="signup-container">
            <div className="signup-image">
                <img src={signup}></img>
            </div>
            <div className="signup-form">
                <h2>Sign up</h2>
                <p>Already Have an Account?<Link className='sign' to="/signin">Sign in</Link></p>
                <form>
                    <input type="text" name="name" placeholder="Your name" /><br />
                    <input type="text" name="username" placeholder="Username" /><br />
                    <input type="email" name="email" placeholder="Email address" /><br />
                    <input type="password" name="password" placeholder="Password" /><br />
                    <label><input type="checkbox" name="checkbox" className='checkbox' />I agree with the Privacy Policy and Terms and Conditions
                    </label><br />
                    <Link type='submit' to="/signin" className="signup">Sign Up</Link>
                </form>
            </div>
        </div>
    )
}
export default Signup;
