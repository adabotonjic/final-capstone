import logo from './Logo.svg';
import basket from './Basket.svg'


function Nav() {
    return (
      <>

      <div className='container'>
        <div className='row'>

        <nav>
          <div className="d-lg-none" id="mobile-menu">
            <button className="nav-btn">
              <input type="checkbox" id="overlay-input" />
              <label htmlFor="overlay-input" id="overlay-button"><span></span></label>
              <div id="overlay">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/menu">Menu</a></li>
                  <li><a href="/booking">Reservations</a></li>
                  <li><a href="/order-online">Order online</a></li>
                  <li><a href="/login">Login</a></li>
                </ul>
              </div>
            </button>
            <a className='logo-holder' href="/" >
            <img className='logo ' src={logo} alt="Little Lemon logo" />
          </a>
          <a className='basket-holder' href="/" >
            <img className='basket' src={basket} alt="Little Lemon logo" />
          </a>

          </div>
          <div className='d-none d-lg-flex' id="desktop-menu">
          <a className='logo-holder' href="/" >
            <img className='logo img-fluid' src={logo} alt="Little Lemon logo" />
          </a>
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/booking">Reservations</a></li>
              <li><a href="/order-online">Order online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </nav>
        </div>
      </div>


          
      </>
    );
  }
  
  export default Nav;