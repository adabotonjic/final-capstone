import footerlogo from './Footer-logo.png';
function Footer() {
    return (
      <>

      <footer className='wrapper-footer'>
      <div className='container'>
        <div className='row'>
          <div className='content-wrapper w-100'>
          <div className='img-holder'>
          <img src={footerlogo} alt="Little Lemon footer logo" />
          </div>
          <div className='navs-holder'>
            <nav>
              <ul>
              <li>Doormat Navigation</li>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservatione">Reservations</a></li>
                <li><a href="/order-online">Order online</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </nav>
            <nav>
              <ul>
              <li>Contact</li>
                <li><a href="/">Address</a></li>
                <li><a href="/">Phone number</a></li>
                <li><a href="/">Email</a></li>

              </ul>
            </nav>
            <nav>
              <ul>
              <li>Social Media Links</li>
              <li><a href="/">Address</a></li>
                <li><a href="/">Phone number</a></li>
                <li><a href="/">Email</a></li>

              </ul>
            </nav>
          </div>
          </div>
        </div>
      </div>
      </footer>
          
      </>
    );
  }
  
  export default Footer;