import React from 'react';
import '../App.css';
import './signupComp.css'

function SignUpComp() {
    return (
      <div>
      <header>
        <h1 id="light-font">Reliable, efficient delivery</h1>
        <h1 id="dark-font">Powered by Latest Technologies</h1>
        <p>
          Travally is powered by one of the most Efficient, Trending and Powerful APIs present in the market. 
        </p>
      </header>
      <div className="container">
        <div className="box" id="cyan">
          <h3>Restaurants</h3>
          <p>Identifies the curated and best Restaurants so that you can have best food and experience.</p>
          
        </div>
        <div className="box" id="red">
          <h3>Attractions</h3>
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
      
    </div>
    );
}

export default SignUpComp;