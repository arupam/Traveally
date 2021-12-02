import React from 'react';
import './Services.css';
import '../../App.css';
import Navbar from '../Navbar';

export default function Services() {
  return (
  <>
  <Navbar /> 
  <div>
       
        <div className="container">
          <h1>Our Services</h1>
          <div className="row">
            <div className="service">
              <i className="fas fa-laptop-code" />
              <h2>Web Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                quae?
              </p>
            </div>
            <div className="service">
              <i className="fas fa-chart-line" />
              <h2>Marketing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                quae?
              </p>
            </div>
            <div className="service">
              <i className="fab fa-sketch" />
              <h2>Graphics</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                quae?
              </p>
            </div>
            <div className="service">
              <i className="fas fa-database" />
              <h2>Data Analysis</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                quae?
              </p>
            </div>
            <div className="service">
              <i className="fas fa-mobile-alt" />
              <h2>App Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                quae?
              </p>
            </div>
            <div className="service">
              <i className="fas fa-file-invoice" />
              <h2>Accounting</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                quae?
              </p>
            </div>
            <div className="service">
              <i className="fas fa-money-check-alt" />
              <h2>Payroll</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                quae?
              </p>
            </div>
            <div className="service">
              <i className="fas fa-network-wired" />
              <h2>Networking</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                quae?
              </p>
            </div>
          </div>
        </div>
      </div>
  
  </>
  )
}
