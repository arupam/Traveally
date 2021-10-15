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
                        <input type="text" className="form-control" id="username" /> <br />
                        <label className="useremail-text-signup" htmlFor="useremail"><i class="fas fa-user"></i> Email</label> <br />
                        <input type="text" className="form-control" id="useremail" /> <br />
                        <label className="userpw-text-signup" htmlFor="password"><i className="fa fa-lock" /> Password</label> <br />
                        <input type="text" className="form-control" id="password" /> <br />
                        <label className="userpw-text-signup" htmlFor="confpassword"><i className="fa fa-lock" /> Confirm your password</label> <br />
                        <input type="text" className="form-control" id="password" /> <br />
                        
                        <button  type="submit" className="btn-signup"><i class="fas fa-arrow-right"></i></button>

                        <div className="signin-text">
                        <p>Already have an account?   <a className="signin-btn" href="#">   Sign in</a> </p> 
                        </div>
                    </form>

        
        </div>
    );
}

export default SignUpComp;