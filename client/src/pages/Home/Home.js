import React from 'react';
import Header from '../../components/Header';
import HomeSobre from '../../components/HomeSobre';
import Mapa from '../../components/Mapa';
import Footer from '../../components/Footer';
import '../../assets/css/App.css';
import './Home.css';



const Home = () => 

  <section className="home-container">
  <Header />
  <HomeSobre />
  <Mapa />
  <Footer />
  </section>

export default Home