import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/DashBoard';
import Trips from './components/pages/Trips';
import Blogs from './components/pages/Blogs';
import Reviews from './components/pages/Reviews';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/trips' component={Trips} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/reviews' component={Reviews} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
