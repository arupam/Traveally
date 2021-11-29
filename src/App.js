import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import Dashboard from './components/pages/DashBoard';
import Dashboard2 from './components/pages/Dashboard2';
import TripPlan from './components/pages/TripPlan';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={LogIn} />
          <Route path='/dashboard2' component={Dashboard2} />
          <Route path='/plan' component={TripPlan} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
