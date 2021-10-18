import React from 'react';
import '../App.css';
import './signupComp.css'
import './login.css'

function LoginComp() {
    return (
        <div className='container-login'
            style={{
                backgroundImage: "url(" + "images/signupcover.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '580px'
            }} >

            <h1> <strong> Login to Your Account </strong> </h1>
            <br></br>
            <p>Make your travelling journey better with us!</p>

            <form className="form" action="#">
                <label className="useremail-text-signup" htmlFor="useremail"><i class="fas fa-user"></i> Email</label> <br />
                <input type="text" className="form-control" id="useremail" required /> <br />
                <label className="userpw-text-signup" htmlFor="password"><i className="fa fa-lock" /> Password</label> <br />
                <input type="text" className="form-control" id="password" required /> <br />
                <input type="checkbox" id="terms-signup" name="terms-signup" />
                <label htmlFor="terms-signup">&nbsp;  Keep me Signed in</label><br></br>
                <button type="submit" className="btn-signup"><i class="fas fa-arrow-right"></i></button>

            </form>
        </div>
    );
}

export default LoginComp;
