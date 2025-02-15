import React from 'react'
import Image from 'next/image'
import styles from "@/styles/Banner.module.css"
function Proccess() {
  return (
<div>
      <div className={`card  ${styles["proccess-head"]}`}>
        
        {/* Image Wrapper */}
        <div className="card-img">
          <Image
            src="/Banner/proccess.jpg"
            alt="Process Banner"
            width={1440}
            height={213}
            className="rounded-lg"
          />
          
          {/* Overlay with Centered Text */}
          <div className="card-img-overlay">

            <h1  className={`text-white  ${styles["proccess-head-text"]}` }>Our Proven Localization Methodology</h1>
          </div>
        </div>

      </div>
  <div className={`container  ${styles["proccess-list"]}` }>
        

<div className="row g-0">
    <div className="col-md-4">
      <Image src="/Banner/p1.png" className="img-fluid " alt="..." width = {250} height = {250}></Image>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Globalization</h5>
        <p className="card-text text-secondary">Our approach begins with globalization—the foundational process of preparing software for localization into any language, locale, and culture. Strategic adjustments and continuous planning throughout the software development cycle are pivotal. Implementing best practices in globalization not only accelerates market readiness 
            but also significantly curtails costs, mitigates risks, and alleviates the burden on internal teams.</p>
      </div>
    </div>
  </div>
<div className="row g-0">
    <div className="col-md-4">
      <Image src="/Banner/p2.png" className="img-fluid " alt="..." width = {250} height = {250}></Image>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Localization</h5>
        <p className="card-text text-secondary">Simply translating text is not enough. Our localization strategy is crafted for specific locales and languages, employing specialized industry resources and advanced technology. We support diverse resource file formats and seamlessly integrate with version control systems and code repositories to enable efficient, automated file handling. Additionally, our visual localization tools offer translators and reviewers 
            critical context via live screens or screenshots, ensuring greater accuracy and relevance.</p>
      </div>
    </div>
  </div>
<div className="row g-0">
    <div className="col-md-4">
      <Image src="/Banner/p3.png" className="img-fluid " alt="..." width = {250} height = {250}></Image>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Testing</h5>
        <p className="card-text text-secondary">The final step in our methodology is comprehensive testing. 
            No software localization project is deemed complete without ensuring that the software 
            and mobile apps perform flawlessly across different languages, operating systems, browsers, 
            channels, and devices. Our testing protocols are designed to prevent costly delays and avoid
             potential flaws. We offer an array of testing services, including functional, linguistic,
              layout/UI design, user experience (UX), user acceptance testing (UAT),
               internationalization (i18n), accessibility (A11Y), and automated testing.</p>
      </div>
    </div>
  </div>
      </div>
      <div className={`card  ${styles["proccess-bottom"]}` }>
  
  <div className={`card-body  ${styles["proccess-bottom"]}` } >
    <p className="card-text">Through these rigorous methodologies, Transfective guarantees that your software localization projects are executed with precision, ensuring your products resonate with and are accessible to users worldwide.</p>
  </div>
</div>
    </div>
  )
}

export default Proccess