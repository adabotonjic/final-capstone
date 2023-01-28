import Hero from './Hero/hero';
import Highlights from './Highlights/hightlights';
import Testimonials from './Testimonials/testimonials';
import About from './About/about';

function Homepage() {
    return (
      <>

        
          <section className="alignfull" id="wrapper-hero">
          <Hero />
          </section>
          <section className="wrapper" id="wrapper-highlights">
          <Highlights />
          </section>
          <section className="alignfull" id="wrapper-testimonials">
          <Testimonials />
          </section>
          <section className="wrapper" id="wrapper-about">
          <About />
          </section>
      


      </>
    );
  }
  
  export default Homepage;