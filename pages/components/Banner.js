import React from 'react'
import Image from 'next/image'
import styles from "@/styles/Banner.module.css"
function Banner() {
  return (
    <div>
        <div className="banner position-relative">
  <Image src="/Banner/Banner.jpg" alt="Banner Image"  className={styles["card-img"]} width={1404} height={500}></Image>
  <div className="card-img-overlay">
  <h1 className={styles["card-title"]}>Software Localization & Testing</h1>
    <h4 className={styles["card-subtitle"]}>Ensuring Excellence in Software Localization</h4>
    <p className={styles["card-text"]}>At Transfective, we recognize the critical importance of software localization in today’s 
      global market. As organizations strive to tailor their software for various linguistic and cultural 
      landscapes, a meticulous approach is required to ensure platforms are both linguistically accurate and 
      culturally resonant. Our process encompasses every stage of localization—from identifying and extracting
       localizable elements to re-engineering and rigorously testing multiple language versions. We are committed to integrating quality at every phase, utilizing industry best practices and cutting-edge technology to deliver exceptional results.</p>
    </div>

</div>



    </div>
  )
}

export default Banner