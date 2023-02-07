import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import BookingPage from './BookingPage/BookingPage';
import ConfirmedBooking from './ConfirmedBooking/ConfirmedBooking';

function Main() {

    return (
      <>
      <main className='wrapper' id="page-wrapper">
   
      <div className='container'>
        <div className=''>
        
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
        </Routes>
      
        </div>
      </div>
     
      </main>

      </>
    );
  }
  
  export default Main;