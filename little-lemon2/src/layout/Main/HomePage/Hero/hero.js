import heroImg from '../img/restauranfood.jpg';
import './hero.css';

function Hero() {
    return (
      <>
<div className='content-wrapper'>
    <div className="title-holder">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>

    </div>
    <div className="content">
        <div className="text-holder">
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with modern twist.</p>
            <a className='btn btn-hero' href="/booking">Reserve a Table</a>
        </div>

      
     
        <div className="img-wrapper">
            <img className="img-fluid" src={heroImg} alt="restauranfood" width="375" height="auto" />
        </div>
        
        </div>
</div>


          
      </>
    );
  }
  
  export default Hero;