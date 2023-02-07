import React from 'react';
import Hero from './Hero/hero';
import Highlights from './Highlights/hightlights';
import Testimonials from './Testimonials/testimonials';
import About from './About/about';

function Homepage() {
    return (
      <>

        
          <section className="alignfull" id="wrapper-hero" aria-label='Home hero'>
          <Hero />
          </section>
          <section className="wrapper" id="wrapper-highlights" aria-label='higlights'>
          <Highlights />
          </section>
          <section className="alignfull" id="wrapper-testimonials" aria-label='testimonials'>
          <Testimonials />
          </section>
          <section className="wrapper" id="wrapper-about" aria-label='about us'>
          <About />
          </section>
      


      </>
    );
  }
  
  export default Homepage;