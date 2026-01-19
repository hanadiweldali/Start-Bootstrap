import React from 'react'
import styles from './contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
  return (
    <>
    <section className='container py-5'>
  <div className='d-flex flex-column align-items-center'>
      <h2 className={` ${styles.textnavycolor} fs-1 fw-bold `}>CONTACT ME</h2>
         <div className='d-flex gap-2 align-items-center'>
             <hr className={`${styles.bgnavycolor} mt-4`} />
           <FontAwesomeIcon icon={faStar} className={styles.starIcon}   style={{ color: '#2c3e50' }} />
              <hr className={`${styles.bgnavycolor} mt-4`} />
         </div>
         <div className='d-flex flex-column gap-3 mt-5 align-items-center justify-content-center'>
<div className={`${styles.w200} input-group mb-3 `}>
  <input
    type="text"
    className={` form-control py-3 `}
    placeholder="Full Name"
    aria-label="Recipient’s username"
    
  />
</div>
<div className={`${styles.w200} input-group mb-3 `}>
  <input
    type="email"
    className={` form-control py-3 `}
    placeholder="Email Address"
    aria-label="Recipient’s username"
   
  />
</div>
<div className={`${styles.w200} input-group mb-3 `}>
  <input
    type="password"
    className={` form-control py-3 `}
    placeholder="Password"
    aria-label="Recipient’s username"
    aria-describedby="button-addon2"
  />
</div>
<div className={`${styles.w200}  mb-4 `}>
  <textarea
     className={` form-control py-3`}
    rows="4"
    placeholder="Message"
  ></textarea>
</div>
</div>

  <button className={`btn text-white ${styles.btnsend} ${styles.mainbg}`}>SEND</button>
  </div>
    </section>
    
    </>
  )
}
