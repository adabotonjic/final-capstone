import React from 'react';
import Hero from './Hero/hero';





function ConfirmedBooking({render}) {

   
      
    return (
      <>

        
          <section className="alignfull" id="wrapper-hero" aria-label='Confirmed Booking hero'>
          <Hero />
          </section>
          <section className="wrapper" id="wrapper-booking" aria-label='Confirmed Booking page'>
          Your dinner was booked succesfully
          </section>
      </>
    );
  }
  
  export default ConfirmedBooking;