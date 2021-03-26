import * as React from 'react'

// markup
const IndexPage = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Nick's</h1>
      </header>
      <main>
        <div className="services">
          <div className="service">
            <h3 className="service__name">Elderly</h3>
            <div className="service__price">$22</div>
          </div>
          <div className="service">
            <h3 className="service__name">Kids</h3>
            <div className="service__price">$22</div>
          </div>
          <div className="service">
            <h3 className="service__name">Hair Cuts</h3>
            <div className="service__price">$25</div>
          </div>
          <div className="service">
            <h3 className="service__name">Shaves</h3>
            <div className="service__price">$30</div>
          </div>
          <div className="service">
            <h3 className="service__name">Beard</h3>
            <div className="service__price">$15</div>
          </div>
          <div className="service">
            <h3 className="service__name">Head Shave</h3>
            <div className="service__price">$35</div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <address className="footer__address">468 Osceola Ave s., St. Paul, MN</address>
      </footer>
    </>
  )
}

export default IndexPage
