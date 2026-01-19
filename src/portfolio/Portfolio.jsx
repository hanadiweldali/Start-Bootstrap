import React from 'react'
import styles from './portfolio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import imgone from './../assets/img/1.png'
import imgtwo from './../assets/img/2.png'
import imgthree from './../assets/img/3.png'
import imgfour from './../assets/img/4.png'
import imgfive from './../assets/img/5.png'
import imgsix from './../assets/img/6.png'
export default function Portfolio() {
  return (
    <>
    <section className='container py-5'>
    <div className='d-flex gap-2 flex-column  align-items-center'>
        <h2 className={` ${styles.textnavycolor} fs-1 fw-bold `}>Portfolio</h2>
         <div className='d-flex gap-2 align-items.center'>
             <hr className={`${styles.bgnavycolor} mt-4`} />
           <FontAwesomeIcon icon={faStar} className={styles.starIcon}   style={{ color: '#2c3e50' }} />
              <hr className={`${styles.bgnavycolor} mt-4`} />
         </div>
    </div>
      <div className='row g-5 mt-4'>
        <div className={`col-12 col-md-6 col-lg-4 ${styles.imgWrapper}`}>
            <img src={imgone} className={styles.imgg} alt="" />
        </div>
          <div className={`col-12 col-md-6 col-lg-4 ${styles.imgWrapper}`}>
            <img src={imgtwo} className={styles.imgg} alt="" />
        </div>
          <div className={`col-12 col-md-6 col-lg-4 ${styles.imgWrapper}`}>
            <img src={imgthree} className={styles.imgg} alt="" />
        </div>
          <div className={`col-12 col-md-6 col-lg-4 ${styles.imgWrapper}`}>
            <img src={imgfour} className={styles.imgg} alt="" />
        </div>
          <div className={`col-12 col-md-6 col-lg-4 ${styles.imgWrapper}`}>
            <img src={imgfive} className={styles.imgg} alt="" />
        </div>
          <div className={`col-12 col-md-6 col-lg-4 ${styles.imgWrapper}`}>
            <img src={imgsix} className={styles.imgg} alt="" />
        </div>
      </div>
    </section>
    </>
  )
}
