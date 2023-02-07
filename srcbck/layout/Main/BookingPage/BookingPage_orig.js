import Hero from '../BookingPage/Hero/hero';
import BookingFrom from '../BookingPage/BookingForm/BookingForm';
//import { useState } from 'react';


function BookingPage() {
  //const [formDetails, setFormDetails] = useState([]);
    return (
      <>

        
          <section className="alignfull" id="wrapper-hero">
          <Hero />
          </section>
          <section className="wrapper" id="wrapper-highlights">
          <BookingFrom />
          </section>

          <section className="wrapper" id="wrapper-about">
       
          </section>
      


      </>
    );
  }
  
  export default BookingPage;