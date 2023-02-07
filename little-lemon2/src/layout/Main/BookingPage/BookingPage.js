import React from 'react';
import Hero from './Hero/hero';
import BookingFrom from './BookingForm/BookingForm';
import { useState } from 'react'



function BookingPage() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };
  
  const [formDetails, setFormDetails] = useState([]);
  const [bookedTimes, setBookedTimes]= useState(''); 

  const updateForm = (formData) => {
    setFormDetails([...formDetails, formData]);
    setBookedTimes([...bookedTimes,formData.time] );
    
  };
 

const printBookedTimes = formDetails.map((data, index) => {
  const items = data.time;
  


  return  <li key={index}>{items}</li>

})

    return (
      <>

        
          <section className="alignfull" id="wrapper-hero" aria-label='Booking hero'>
          <Hero />
          </section>
          <section className="wrapper" id="wrapper-booking" aria-label='Booking form'>
          
          <BookingFrom updateForm={updateForm} onSubmit={handleSubmit}/>
          <p>Booked times: {printBookedTimes}</p>
          </section>
      </>
    );
  }
  
  export default BookingPage;