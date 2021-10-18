import React from 'react';
import '../App.css';
import './signupComp.css'

function SignUpComp() {
    return (
        <div className='container-signup'
            style={{
                backgroundImage: "url(" + "images/signupcover.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} >

            <h1> <strong> Create Account </strong> </h1>
            <br></br>
            <p>Make your travelling journey better with us!</p>

            <form className="form" action="#">
                <label className="username-text-signup" htmlFor="username"><i class="fas fa-user"></i> Username</label> <br />
                <input type="text" className="form-control" id="username" required /> <br />
                <label className="useremail-text-signup" htmlFor="useremail"><i class="fas fa-user"></i> Email</label> <br />
                <input type="text" className="form-control" id="useremail" required /> <br />
                <label className="userpw-text-signup" htmlFor="password"><i className="fa fa-lock" /> Password</label> <br />
                <input type="text" className="form-control" id="password" required /> <br />
                <label className="userpw-text-signup" htmlFor="confpassword"><i className="fa fa-lock" /> Confirm your password</label> <br />
                <input type="text" className="form-control" id="confpassword" required /> <br /> 

                <input type="checkbox" id="terms-signup" name="terms-signup" required />
                <label htmlFor="terms-signup">&nbsp;  I have read and agree with Terms of Service and Privacy Policy</label><br></br>

                <button type="submit" className="btn-signup"><i class="fas fa-arrow-right"></i></button>

                <div className="signin-text">
                    <p>Already have an account?   <a className="signin-btn" href="/login"> &nbsp;  Sign in</a> </p>
                </div>
            </form>
        </div>
    );
}

export default SignUpComp;