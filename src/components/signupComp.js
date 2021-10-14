import React from 'react';
import '../App.css';
import { Button } from './Button';
import './signupComp.css'

function SignUpComp() {
    return (
        <div className='container-signup'>
            <h1>Create Account</h1>
            <br></br>
            <p>Make your travelling journey better with us!</p>

            <form className="form" action="#">
                        <label className="username-text-signup" htmlFor="username"><i class="fas fa-user"></i> Username</label> <br />
                        <input type="text" className="form-control" id="username" /> <br />
                        <label className="userpw-text-signup" htmlFor="password"><i className="fa fa-lock" /> Password</label> <br />
                        <input type="text" className="form-control" id="password" /> <br />
                        
                        <button  type="submit" className="btn-signup"><i class="fas fa-arrow-right"></i></button>

                        <p>Already have an account?  <a className="signin-btn" href="#">Sign in</a> </p> 
   
                    </form>

        
        </div>
    );
}

export default SignUpComp;