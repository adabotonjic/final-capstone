import React from 'react';
import person1 from './img/person1.jpg';
import person2 from './img/person2.jpg';
import person3 from './img/person3.jpg';
import person4 from './img/person4.jpg';
import star from './img/star.jpg';
import './testimonials.css';

function Testimonials() {
    return (
      <>
<div className='content-wrapper'>
    <div className="title-holder">
            <h2 className='h1'>Testimonials</h2>
    </div>
    <div className="content d-flex flex-row justify-between">
        <div className='single-reviewer d-flex flex-column'>
            <div className="ratings d-flex flex-row ">
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
            </div>
            <div className="persone-holder d-flex flex-row align-items-center">
                <img src={person1} alt="person reviewer" width="80" height="80" />
                <p>Pedro</p>
            </div>
            
            <div className="review-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
        </div>
        <div className='single-reviewer d-flex flex-column'>
            <div className="ratings d-flex flex-row">
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
            </div>
            <div className="persone-holder d-flex flex-row align-items-center">
                <img src={person2} alt="person reviewer" width="80" height="80" />
                <p>Maria</p>
            </div>
            
            <div className="review-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            
        </div>
        <div className='single-reviewer d-flex flex-column'>
            <div className="ratings d-flex flex-row">
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
            </div>
            <div className="persone-holder d-flex flex-row align-items-center">
                <img src={person3} alt="person reviewer" width="80" height="80" />
                <p>Leo</p>
            </div>
            
            <div className="review-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            
        </div>
        <div className='single-reviewer d-flex flex-column'>
            <div className="ratings d-flex flex-row">
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
                <img src={star} alt="star" width="20" height="20" />
            </div>
            <div className="persone-holder d-flex flex-row align-items-center">
                <img src={person4} alt="person reviewer" width="80" height="80" />
                <p>Kenisha</p>
            </div>
            
            <div className="review-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
        </div>
    </div>
    </div>


      </>
    );
  }
  
  export default Testimonials;