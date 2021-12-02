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
          Identifies famous sightseeing attractions around you to enrich your experience in the city you wish to travel
          </p>
          
        </div>
        <div className="box" id="blue">
          <h3>Hotels</h3>
          <p>Travally identifies the best hotels around you to make your stay more comfortable. You can select your hotel based on its rating</p>
          
        </div>
        <div className="box" id="orange">
          <h3>Rating</h3>
          <p>Travally redirects to the website of the option you've chosen. This would help you decide better</p>
          
        </div>
      </div>
      
    </div>
    );
}

export default SignUpComp;