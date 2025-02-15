import React from 'react'
import Image from 'next/image'
import styles from "@/styles/Banner.module.css"
function Card({image,title,desc}) {
  return (
    <div className={`col `}>
    
    <div className={`card ${styles['why-card']}`}>
      <Image src={image}  alt="..."  width={160} height={160}></Image>
      <div className={`card-body ${styles['card-align']}`}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-secondary">{desc}</p>
      </div>
    </div>
    </div>
  )
}

export default Card