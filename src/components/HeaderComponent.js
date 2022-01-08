import React, { Component } from 'react';

function Header() {
  return (
    <header>
      <div className='container'>
        <div className='row'>
          <div className='col-6 col-lg-2 d-flex align-items-center'>
            <a href='/home'>
              <img
                src='/assets/MMLogo.png'
                className='logo img-fluid'
                alt='Mocha Moment Logo'
              />
            </a>
          </div>
          <div className='col-6 col-lg-10 d-flex align-items-center'>
            <nav className='navbar navbar-expand-lg navbar-dark w-100'>
              <button
                className='navbar-toggler ml-auto'
                type='button'
                data-toggle='collapse'
                data-target='#mainMenuContent'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='mainMenuContent'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a className='nav-link' href='/home'>
                      Home
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/productmenu'>
                      Menu
                    </a>
                  </li>
                </ul>
                <div className='d-flex ml-auto px-5 py-4 p-lg-0 justify-content-around align-items-center'>
                  <div className='shopping-cart mr-4'>
                    <i className='fas fa-shopping-cart'></i>{' '}
                    <span className='badge badge-pill badge-danger'>0</span>
                  </div>
                  <a href='menu.html' className='btn order-online'>
                    Order Online
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    // <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    //   <a className='navbar-brand' href='#'>
    //     Navbar
    //   </a>

    //   <button
    //     className='navbar-toggler'
    //     type='button'
    //     data-toggle='collapse'
    //     data-target='#navbarSupportedContent'
    //     aria-controls='navbarSupportedContent'
    //     aria-expanded='false'
    //     aria-label='Toggle navigation'
    //   >
    //     <span className='navbar-toggler-icon'></span>
    //   </button>

    //   <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    //     <ul className='navbar-nav mr-auto'>
    //       <li className='nav-item active'>
    //         <a className='nav-link' href='#'>
    //           Home <span className='sr-only'>(current)</span>
    //         </a>
    //       </li>
    //       <li className='nav-item'>
    //         <a className='nav-link' href='#'>
    //           Link
    //         </a>
    //       </li>
    //       <li className='nav-item dropdown'>
    //         <a
    //           className='nav-link dropdown-toggle'
    //           href='#'
    //           id='navbarDropdown'
    //           role='button'
    //           data-toggle='dropdown'
    //           aria-expanded='false'
    //         >
    //           Dropdown
    //         </a>
    //         <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
    //           <a className='dropdown-item' href='#'>
    //             Action
    //           </a>
    //           <a className='dropdown-item' href='#'>
    //             Another action
    //           </a>
    //           <div className='dropdown-divider'></div>
    //           <a className='dropdown-item' href='#'>
    //             Something else here
    //           </a>
    //         </div>
    //       </li>
    //       <li className='nav-item'>
    //         <a className='nav-link disabled'>Disabled</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Header;
