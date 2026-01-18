import React from 'react'
import styles from './navbar.module.css'
export default function Navbar() {
  return (
  <nav className={`${styles.bgmain} navbar p-3 position-sticky top-0 navbar-expand-lg`}>
      <div className="container">
        <a className="navbar-brand text-white fw-bold fs-3" href="#">Start Bootstrap</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
            <div className={`d-flex gap-3 text-white ${styles.ggg} rounded-3  p-2 align-items-center`}>
            <p className='m-0'>MENU</p>
          <span className="navbar-toggler-icon text-white border-0"></span></div>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav gap-3 ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link  ${styles.bggg} fw-bold `} href="#">PORTFOLIO</a>
            </li>

            <li className="nav-item">
              <a className={`nav-link ${styles.bggg} fw-bold`} href="#">ABOUT</a>
            </li>
          <li className="nav-item">
              <a className={`nav-link ${styles.bggg} fw-bold`} href="#">CONTACT</a>
            </li>

          
          </ul>

       
        </div>
      </div>
    </nav>
   
  )
}
