import React, { Component } from 'react'
import './signup.css';

export default class signup extends Component {
    render() {
        return(
            <>
            <div classname="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-primary text-center">Login</h1>
                        <br /><br />
                        <form className="form" action="#">
                            <label htmlFor="username"><i className="fa fa-address-card-o" />  Username</label> <br />
                            <input type="text" className="form-control" id="username" placeholder="Type your username" /> <br />
                            <label htmlFor="password"><i className="fa fa-lock" />  Password</label> <br />
                            <input type="text" className="form-control" id="password" placeholder="Type your password" /> <br />
                            <a href="#">Forgot Password?</a> <br />
                            <button type="submit" className="login btn btn-block">Login</button>
                            <br /><br /><br />
                            <p style={{ textAlign: 'center' }}>Or Sign Up Using</p>
                            <div className="row">
                                <div className="col-xs-4">
                                    <button>one</button>
                                </div>
                                <div className="col-xs-4">
                                    <button>two</button>
                                </div>
                                <div className="col-xs-4">
                                    <button>three</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>

        );
    }
}
