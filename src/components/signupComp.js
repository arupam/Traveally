import React from 'react';
import '../App.css';
import './signupComp.css'

function SignUpComp() {
    return (
      <div>
      <header>
        <h1 id="light-font">Reliable, efficient delivery</h1>
        <h1 id="dark-font">Powered by Technology</h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <div className="container">
        <div className="box" id="cyan">
          <h3>Supervisor</h3>
          <p>Monitors activity to identify project roadblocks</p>
          
        </div>
        <div className="box" id="red">
          <h3>Team Builder</h3>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>
          
        </div>
        <div className="box" id="blue">
          <h3>Calculator</h3>
          <p>Uses data from past projects to provide better delivery estimates</p>
          
        </div>
        <div className="box" id="orange">
          <h3>Karma</h3>
          <p>Regularly evaluates our talent to ensure quality</p>
          
        </div>
      </div>
      <footer>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Muhammad Uzair</a>.
      </footer>
    </div>
    );
}

export default SignUpComp;