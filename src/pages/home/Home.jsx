import React from 'react'
import Features from '../../Components/features/Features'
import FturesProperty from '../../Components/featuresProperty/FturesProperty';
import Footer from '../../Components/footer/Footer';

import Header from '../../Components/header/Header'
import Mail from '../../Components/mail/Mail';
import Navbar from '../../Components/navbar/Navbar';
import PropertyList from '../../Components/propertyList/PropertyList';


import "./home.css"
const Home = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className='homeContainer'>
      <Features/>
      <h1 className="homeTitle">Browser by property type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Home guests Love</h1>
     <FturesProperty/>
     <Mail/>
    
     <Footer/>
    </div>
     
    </div>
  )
}

export default Home
