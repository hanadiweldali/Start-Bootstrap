import React from 'react'
import styles from './hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import manImg from './../assets/img/avataaars.svg'
export default function Hero() {
  return (
    <>
    <section className={`min-vh-100 ${styles.mainbgcolor}`}>
        <div className='d-flex flex-column gap-3 justify-content-center align-items-center p-5'>
 <img src={manImg} alt="" />
 <h1 className='text-white fs-1 fw-bold'>START BOOTSTRAP</h1>
 <div className='d-flex gap-2 align-items.center'>
     <hr className='  mt-4' />
   <FontAwesomeIcon icon={faStar} className={styles.starIcon}  style={{ color: '#ffffff' }} />
      <hr className=' mt-4' />
 </div>
 <p className='text-white fs-3'>Graphic Artist - Web Designer - Illustrator</p>
  </div>
    </section>
    </>
  )
}
