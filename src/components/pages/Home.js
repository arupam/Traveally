import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';
import SignUpComp from '../signupComp';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <SignUpComp />
      <Footer />


    </>
  );
}

export default Home;
