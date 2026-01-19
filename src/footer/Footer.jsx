import React from 'react'
import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
    <>
    <section className={`${styles.bgnavycolorfooter}`}>
     <div className="container">

     <div className="row py-5">
   <div className={`col-12 col-md-4 d-flex flex-column gap-1 `}>
    <h2 className='text-white fw-bold'>Location</h2>
    <p className='text-white'>2215 John Daniel Drive</p>
    <p className='text-white'>Clark, MO 65243</p>
   </div>
   <div className={`col-12 col-md-4 d-flex flex-column gap-1`}>

    <h2 className='text-white fw-bold'>Around the Web</h2>
    <div className={`d-flex gap-3  mt-3  `}>
      <FontAwesomeIcon icon={faFacebookF} className={`${styles.icons} border p-3 d-flex justify-content-center align-items-center rounded-circle`}/>
      <FontAwesomeIcon icon={faTwitter} className={`${styles.icons} border p-3 d-flex justify-content-center align-items-center rounded-circle`}/>
      <FontAwesomeIcon icon={faLinkedinIn} className={`${styles.icons} border p-3 d-flex justify-content-center align-items-center rounded-circle`}/>
      <FontAwesomeIcon icon={faGlobe} className={`${styles.icons}  border p-3 d-flex justify-content-center align-items-center rounded-circle`}/>
    </div>
   </div>
   <div className={`col-12 col-md-4 d-flex flex-column gap-1`}>
   <h2 className='text-white fw-bold'>About Freelancer</h2>
   <p className='text-white'>Freelance is a free to use, MIT licensed Bootstrap theme created by<a className={`${styles.maincolor} fw-bold`}> Start Bootstrap.</a></p>


   </div>


     </div>
   
     </div>
<div className={`d-flex justify-content-center ${styles.bgnavycolorsubfooter} align-items-center `}>

<p className='text-white text-center fw-bold mt-3'>Copyright © Your Website 2023</p>
   </div>
    </section>
    
    
    </>
  )
}
