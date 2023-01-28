import specImg1 from '../img/greek salad.jpg';
import specImg2 from '../img/bruchetta.jpg';
import specImg3 from '../img/lemon dessert.jpg';
import './highlights.css';

function Highlights() {
    return (
      <>
<div className='content-wrapper'>
    <div className="title-holder d-md-flex align-items-center justify-md-between flex-column flex-md-row">
        <h2 className='h1'>This weeks specials!</h2>    
        <a className='btn' href="/">Order Menu</a>
    </div>
    <div className="content">
        <div className="specials-grid">
           <div className='specials-item'>
                <div className='img-holder d-none d-md-block'>
                        <img className="img-fluid" src={specImg1} alt="Lemon dessert" width="" height="auto" />
                </div>
                <div className='specials-heading d-flex flex-row align-items-center justify-between'>
                        <h3>Greek salad</h3>
                        <p className='red '>$ 12.90</p>
                </div>

                <div className='spacials-content d-flex flex-row align-items-center justify-between'>

                    <div className='specials-details '>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <a className='del-order text-deco-none' href="/">Order a delivery <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8035 1.72713C14.8035 0.8993 14.0532 0.221985 13.1363 0.221985H10.6355V1.72713H13.1363V3.72145L10.2354 6.99513H7.3011V3.23227H3.96671C2.12446 3.23227 0.632324 4.57938 0.632324 6.24256V8.50028H2.29952C2.29952 9.74955 3.41654 10.758 4.80031 10.758C6.18408 10.758 7.3011 9.74955 7.3011 8.50028H11.0356L14.8035 4.24825V1.72713ZM4.80031 9.25285C4.34183 9.25285 3.96671 8.91419 3.96671 8.50028H5.63391C5.63391 8.91419 5.25879 9.25285 4.80031 9.25285Z" fill="black"/>
<path d="M7.30112 0.974548H3.13312V2.47968H7.30112V0.974548Z" fill="black"/>
<path d="M14.8035 6.24255C13.4197 6.24255 12.3027 7.251 12.3027 8.50026C12.3027 9.74952 13.4197 10.758 14.8035 10.758C16.1872 10.758 17.3043 9.74952 17.3043 8.50026C17.3043 7.251 16.1872 6.24255 14.8035 6.24255ZM14.8035 9.25283C14.345 9.25283 13.9699 8.91417 13.9699 8.50026C13.9699 8.08635 14.345 7.74769 14.8035 7.74769C15.2619 7.74769 15.6371 8.08635 15.6371 8.50026C15.6371 8.91417 15.2619 9.25283 14.8035 9.25283Z" fill="black"/>
</svg></a>
                    </div>
                    <div className='img-holder d-md-none'>
                        <img className="img-fluid " src={specImg1} alt="Greek salad" width="" height="auto" />
                    </div>
                </div>
                
           </div>
           <div className='specials-item'>
           <div className='img-holder d-none d-md-block'>
                        <img className="img-fluid" src={specImg2} alt="Lemon dessert" width="" height="auto" />
                </div>
                <div className='specials-heading d-flex flex-row align-items-center justify-between'>
                        <h3>Bruschetta</h3>
                        <p className='red '>$ 7.90</p>
                </div>

                <div className='spacials-content d-flex flex-row align-items-center justify-between'>

                    <div className='specials-details '>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <a className='del-order text-deco-none' href="/">Order a delivery <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8035 1.72713C14.8035 0.8993 14.0532 0.221985 13.1363 0.221985H10.6355V1.72713H13.1363V3.72145L10.2354 6.99513H7.3011V3.23227H3.96671C2.12446 3.23227 0.632324 4.57938 0.632324 6.24256V8.50028H2.29952C2.29952 9.74955 3.41654 10.758 4.80031 10.758C6.18408 10.758 7.3011 9.74955 7.3011 8.50028H11.0356L14.8035 4.24825V1.72713ZM4.80031 9.25285C4.34183 9.25285 3.96671 8.91419 3.96671 8.50028H5.63391C5.63391 8.91419 5.25879 9.25285 4.80031 9.25285Z" fill="black"/>
<path d="M7.30112 0.974548H3.13312V2.47968H7.30112V0.974548Z" fill="black"/>
<path d="M14.8035 6.24255C13.4197 6.24255 12.3027 7.251 12.3027 8.50026C12.3027 9.74952 13.4197 10.758 14.8035 10.758C16.1872 10.758 17.3043 9.74952 17.3043 8.50026C17.3043 7.251 16.1872 6.24255 14.8035 6.24255ZM14.8035 9.25283C14.345 9.25283 13.9699 8.91417 13.9699 8.50026C13.9699 8.08635 14.345 7.74769 14.8035 7.74769C15.2619 7.74769 15.6371 8.08635 15.6371 8.50026C15.6371 8.91417 15.2619 9.25283 14.8035 9.25283Z" fill="black"/>
</svg></a>
                    </div>
                    <div className='img-holder d-md-none'>
                        <img className="img-fluid " src={specImg2} alt="Bruschetta" width="" height="auto" />
                    </div>
                </div>
                
           </div>
           <div className='specials-item'>
           <div className='img-holder d-none d-md-block'>
                        <img className="img-fluid" src={specImg3} alt="Lemon dessert" width="" height="auto" />
                </div>
                <div className='specials-heading d-flex flex-row align-items-center justify-between'>
                        <h3>Lemon dessert</h3>
                        <p className='red'>$ 5.00</p>
                </div>

                <div className='spacials-content d-flex flex-row align-items-center justify-between'>

                    <div className='specials-details '>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <a className='del-order  text-deco-none' href="/"> Order a delivery <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8035 1.72713C14.8035 0.8993 14.0532 0.221985 13.1363 0.221985H10.6355V1.72713H13.1363V3.72145L10.2354 6.99513H7.3011V3.23227H3.96671C2.12446 3.23227 0.632324 4.57938 0.632324 6.24256V8.50028H2.29952C2.29952 9.74955 3.41654 10.758 4.80031 10.758C6.18408 10.758 7.3011 9.74955 7.3011 8.50028H11.0356L14.8035 4.24825V1.72713ZM4.80031 9.25285C4.34183 9.25285 3.96671 8.91419 3.96671 8.50028H5.63391C5.63391 8.91419 5.25879 9.25285 4.80031 9.25285Z" fill="black"/>
<path d="M7.30112 0.974548H3.13312V2.47968H7.30112V0.974548Z" fill="black"/>
<path d="M14.8035 6.24255C13.4197 6.24255 12.3027 7.251 12.3027 8.50026C12.3027 9.74952 13.4197 10.758 14.8035 10.758C16.1872 10.758 17.3043 9.74952 17.3043 8.50026C17.3043 7.251 16.1872 6.24255 14.8035 6.24255ZM14.8035 9.25283C14.345 9.25283 13.9699 8.91417 13.9699 8.50026C13.9699 8.08635 14.345 7.74769 14.8035 7.74769C15.2619 7.74769 15.6371 8.08635 15.6371 8.50026C15.6371 8.91417 15.2619 9.25283 14.8035 9.25283Z" fill="black"/>
</svg></a>
                    </div>
                    <div className='img-holder d-md-none'>
                        <img className="img-fluid" src={specImg3} alt="Lemon dessert" width="" height="auto" />
                    </div>
                </div>
                
           </div>
            
        </div>
        
    </div>
</div>


          
      </>
    );
  }
  
  export default Highlights;