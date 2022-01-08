import React, { Component } from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container-fluid py-5 px-3'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <blockquote className='blockquote m-0'>
                <p className='mb-0 script quote'>"I went to the Woods"</p>
                <footer className='blockquote-footer text-center'>
                  <cite title='Source Title'>
                    <a href='https://www.walden.org/' target='_blank'>
                      Thoreau, Walden
                    </a>
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className='row py-5'>
            <div className='col d-flex justify-content-center flex-column flex-lg-row'>
              <ul className='nav justify-content-center'>
                <li className='nav-item active'>
                  <a className='nav-link' href='#'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='menu.html'>
                    Menu
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='footerNavbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                  >
                    Facility
                  </a>
                  <div className='dropdown-menu'>
                    <a className='dropdown-item' href='seating.html'>
                      Seating
                    </a>
                    <a className='dropdown-item' href='rentals.html'>
                      Rentals
                    </a>
                    <a className='dropdown-item' href='benefits.html'>
                      Benefits
                    </a>
                    <a className='dropdown-item' href='open-mic.html'>
                      Open Mic
                    </a>
                  </div>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='roastery.html'>
                    Roastery
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='bakery.html'>
                    Bakery
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='events.html'>
                    Events
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='contact.html'>
                    Contact
                  </a>
                </li>
              </ul>
              <div className='social-icons ml-lg-3 justify-content-center my-3 my-md-0'>
                <a
                  href='https://www.facebook.com/MochaMoment'
                  target='_blank'
                  className='facebook mr-2'
                >
                  <i className='fab fa-facebook'></i>
                </a>
                <a
                  href='https://twitter.com/SteveJDean1'
                  target='_blank'
                  className='twitter ml-2'
                >
                  <i className='fab fa-twitter'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col copyright text-center'>
              &copy; 2021 Mocha Moment
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
