import React from 'react';
import Hero from './Hero/hero';
import BookingFrom from './BookingForm/BookingForm';
import { useState } from 'react'



function BookingPage() {

  
  const [formDetails, setFormDetails] = useState([]);
  const [bookedTimes, setBookedTimes]= useState(''); ;

  const updateForm = (formData) => {
    setFormDetails([...formDetails, formData]);
    setBookedTimes([...bookedTimes,formData.time] );
    
  };
  //console.log(formDetails);
  //console.log(bookedTimes);
 

const printBookedTimes = formDetails.map((data, index) => {
  const items = data.time;
  
  /*for (var i=0; i < formDetails.length; i++) {
    bookedTimes =  formDetails[i].availableTimes;
    lastBookedTime = formDetails[formDetails.length].availableTimes
  }*/

  return  <li key={index}>{items}</li>

})

    return (
      <>

        
          <section className="alignfull" id="wrapper-hero">
          <Hero />
          </section>
          <section className="wrapper" id="wrapper-highlights">
          
          <BookingFrom updateForm={updateForm} />
          <p>Booked times: {printBookedTimes}</p>
          </section>

          <section className="wrapper" id="wrapper-about">
       
          </section>
      


      </>
    );
  }
  
  export default BookingPage;