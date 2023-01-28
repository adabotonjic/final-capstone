import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import BookingPage from './BookingPage/BookingPage';

function Main() {
    return (
      <>
      <main className='wrapper' id="page-wrapper">
   
      <div className='container'>
        <div className='row'>
        
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      
        </div>
      </div>
     
      </main>
   
      

          
      </>
    );
  }
  
  export default Main;