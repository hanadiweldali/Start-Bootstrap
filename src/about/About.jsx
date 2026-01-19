import React from 'react'
import styles from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
export default function About() {
  return (
    <>
        <section className={styles.mainbg}>
            <div className="container py-5 d-flex flex-column gap-2 align-items-center justify-content-center">
        <div className={`d-flex flex-column gap-2 align-items-center justify-content-center`}>
            <h2 className='text-white fw-bold fs-1 '>ABOUT</h2>
            <div className='d-flex gap-2 align-items.center'>
     <hr className='  mt-4' />
   <FontAwesomeIcon icon={faStar} className={styles.starIcon}  style={{ color: '#ffffff' }} />
      <hr className=' mt-4' />
 </div>
        </div>

        <div className="row">

            <div className='col-12 col-md-4 offset-2 text-white text-start p-3 fs-3'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
             <div className='col-12 col-md-4 offset-1 text-white text-start p-3 fs-3'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</div>
        </div>
         <button className={`btn ${styles.btnabout} border border-white fs-3  p-3`}><FontAwesomeIcon icon={faDownload} size="x" />
Free Download!</button>
       
</div>
        </section>
    </>
  )
}
