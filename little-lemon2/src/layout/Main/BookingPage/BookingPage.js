import React from 'react';
import Hero from './Hero/hero';
import BookingFrom from './BookingForm/BookingForm';
import './BookingPage.css'
import { useState } from 'react'



function BookingPage() {

  const [formDetails, setFormDetails] = useState([]);
  const [bookedTimes, setBookedTimes]= useState(''); 


  const updateForm = (formData) => {
    setFormDetails([...formDetails, formData]);
    setBookedTimes([...bookedTimes,formData.time] );

  };

  const PrintBookedTimes = formDetails.map((data, index) => {
    const items = data.time;

    if (items){

      return <li key={index}>{items}</li>
    }
    else {
      
      return <><p>Noting was booked for now</p></>;
    }

})

    return (
      <>

        
          <section className="alignfull" id="wrapper-hero" aria-label='Booking hero'>
            <Hero />
          </section>

          <section className="wrapper" id="wrapper-booking" aria-label='Booking form'>
          
            <BookingFrom updateForm={updateForm}  />
            Booked hours: {PrintBookedTimes}
          </section>
      </>
    );
  }
  
  export default BookingPage;