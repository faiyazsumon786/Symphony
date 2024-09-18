// import React from 'react';

import Banner from './components/Banner';
import Counter from './components/Counter';
import Clients from './components/Clients';
import Products from './components/Products';
import ServiceSection from './components/Services';
import ExpertiseSection from './components/Expertise';
import SkillsSection from './components/Skills';
import AboutSection from './components/About';
import ContactSection from './components/Contacts';
import FooterSection from './components/Footer';


function App() {
  return (
    <div className="App">
      <Banner />
      <div className="my-12" />
      <Clients />
      <div className="my-12" />
      <Counter />
      <div className="my-12" />
      <Products />
      <div className="my-12" />
      <ServiceSection />
      <div className="my-12" />
      <ExpertiseSection />
      <div className="my-12" />
      <SkillsSection />
      <div className="my-12" />
      <AboutSection />
      <div className="my-12" />
      <ContactSection />
      <div className="my-12" />
      <FooterSection />
    </div>
  );
}

export default App;
