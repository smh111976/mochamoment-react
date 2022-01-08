import React from 'react';

function Home(props) {
  return (
    <main className='container-fluid p-0'>
      <div className='home-hero'>
        <div className='container'>
          <div className='home-hero-text before-bg-icon'>
            <h1 className='script'>Savor the Moment...</h1>
            <p>
              Nestled in Janesville’s south-side woods, Mocha Moment offers a
              variety of specialty lattes, cappuccinos, espresso drinks,
              single-origin coffee, coffee roastery, teas, real fruit smoothies,
              breakfast and lunch menu, a full, handmade bakery, Including:
              breads, coffee cakes, muffins, scones, sweet rolls, cookies,
              biscotti, and eclairs. All items quality, handmade from scratch,
              and affordable. So come and let Mocha Moment’s friendly staff
              hand-craft you a latte.{' '}
            </p>
          </div>
          <div className='row my-5'>
            <div className='col-lg-4 mb-4 d-flex'>
              <div className='semi-trans-bg-white w-100 before-bg-icon home-section--hours'>
                <h2 className='script'>Hours</h2>
                <p>
                  <strong>Monday-Friday:</strong>
                  <span>5am-7pm</span>
                  <br />
                  <strong>Saturday:</strong>
                  <span>5am-5pm</span>
                  <br />
                  <strong>Sunday:</strong>
                  <span>8am-11:30am</span>
                </p>
              </div>
            </div>
            <div className='col-lg-4 mb-4 d-flex'>
              <div className='semi-trans-bg-black w-100 before-bg-icon home-section--email'>
                <h2 className='script text-white'>Contact</h2>
                <p>
                  Mocha Moment has no phone at our shop. You may contact us by{' '}
                  <a href='mailto:steve@mochamoment.com'>email</a>.
                </p>
              </div>
            </div>
            <div className='col-lg-4 mb-4 d-flex'>
              <div className='semi-trans-bg-cream w-100 before-bg-icon home-section--location'>
                <h2 className='script'>Location</h2>
                <a href='https://goo.gl/maps/c2EFL1YR41SPRb1s7' target='_blank'>
                  1121 Center Avenue
                  <br />
                  Janesville, Wisconsin 53546
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
