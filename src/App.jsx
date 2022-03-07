import React from 'react';
import Intro from './components/intro/Intro';
import Topbar from './components/topbar/Topbar';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Testimonial from './components/testimonial/Testimonial';
import Works from './components/works/Works';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
