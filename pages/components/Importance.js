import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css';
function Importance() {
  return (
    <div className={styles['margintop']} >
        <div className="container text-center">
  <div className="row">
    <div className="col">
      <Image src = "/Banner/tech.jpg" height ={250} width={400}></Image>
    </div>
    <div className="col text-start">
        <h3>The Importance of Software Localization</h3>
        <p className='text-secondary'>In an era where digital boundaries are continually expanding, the demand for software localization
             services has surged. The ubiquity of the internet enables companies to engage with a global audience,
              necessitating adaptations
             of products and services to cater to diverse regional and linguistic preferences. Effective 
             software localization transcends mere translation; it involves a comprehensive adaptation of user
              interfaces, documentation, manuals, audiovisual content, and software code across multiple languages. 
              To maintain the integrity and context of translated content, our localization experts employ advanced
               technological tools, ensuring consistency and accuracy.</p>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Importance