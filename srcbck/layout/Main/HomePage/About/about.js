import React from 'react';
import img1 from './img/restaurant.jpg';
import './about.css';

function About() {
    return (
      <>
<div className='content-wrapper'>

    <div className="content d-flex flex-column flex-lg-row justify-between">

        <div className="text-holder">
          <div className="title-holder">
                <h2 className='h1'>Little Lemon</h2>
                <h3 className="fw-bold">Chicago</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus diam et ligula ultricies, ac cursus dui pellentesque. Etiam dignissim augue a ipsum sodales bibendum. Aliquam erat volutpat. Sed in consectetur mi. Etiam eu semper magna. Pellentesque consequat et velit eget gravida. Nulla facilisi.</p>

        </div>

        <div className="img-holder">
            <img className="img-fluid" src={img1} alt="" width="" height="auto" />
        </div>
        
        </div>
</div>


          
      </>
    );
  }
  
  export default About;