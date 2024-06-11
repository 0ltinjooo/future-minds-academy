import logo from './logo.svg';
import './css/fma-general.css';
import './css/fma-responsive.css';
import './css/style.css';
import './css/style-responsive.css';
import Nav from './conponents/Nav';
import Hero from './conponents/Hero';
import Trusted from './conponents/Trusted';
import Wrapper from './conponents/Wrapper';
import Succes from './conponents/Succes';
import Features from './conponents/Features';
import Costumer from './conponents/Costumer';
import Devices from './conponents/Devices';
import Pricing from './conponents/Pricing';
import FaqSection from './conponents/FaqSection';
import DownApp from './conponents/DownApp';
import Footer from './conponents/Footer';
import './App.css';
import { useImperativeHandle } from 'react';

function App() {
  return (
    <div className="container-fixed">
      <Nav />
      <Hero />
      <Trusted />
      <Wrapper />
      <Succes />
      <Features />
      <Costumer />
      <Devices />
      <Pricing />
      <FaqSection />
      <DownApp />
      <Footer />
    </div>
  );
}

export default App;
