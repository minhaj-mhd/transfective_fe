import React from 'react';
import styles from '@/styles/Banner.module.css';
import Image from 'next/image';

function Localization() {
  return (
    <div>
      <div className={styles['info']}>
        <h3>Software Localization Explained</h3>
        <p className='text-secondary'>
          Software localization involves adapting software to meet the linguistic, cultural, and legal norms of a target locale. 
          This process goes beyond mere translation; it includes modifying graphics, layouts, and formatting to align with local 
          legal standards, data compliance, device preferences, and prevailing technology trends. 
          At Transfective, we provide a comprehensive suite of software localization services tailored to global markets. 
          Our offerings include:
        </p>
      </div>

      {/* Localization Content */}
      <div className={`container ${styles['localization-container']}`}>
        <div className="row align-items-center">
          
          {/* Left Side: List Group */}
          <div className={`col-md-6 ${styles.localfont} rounded-0`}>
            <ul className="list-group rounded-0 list-group-flush">
              <li className={`list-group-item ${styles.activecolor} rounded-0`} aria-current="true">
                Internationalization
              </li>

              <li className="list-group-item ">Software Translation</li>

              <li className="list-group-item">Language Support</li>
              <li className="list-group-item">Machine Translation</li>

              <li className="list-group-item">Software Engineering</li>
              <li className="list-group-item">User Acceptance Testing</li>
              <li className="list-group-item">Functional Testing</li>
              <li className="list-group-item">Localization Testing</li>
              <li className="list-group-item">Bug Fixing</li>
            </ul>
          </div>

          {/* Right Side: Globe Image & Text */}
          <div className={`col-md-6 ${styles['globe']}`}>
            
            <p><small>
              Preparing your software for localization, ensuring it can support multiple languages and cultural norms 
              without engineering changes.</small>
            </p>
            <Image 
              src="/Banner/globe.png" 
              alt="Globe Image" 
              className={styles['globe-img']} 
              width={472} 
              height={389} 
            />
          </div>

        </div>
      </div>
      <div className={styles['local-footer']}>
        <p><small className='text-secondary'>Additionally, we are equipped to produce all necessary documentation, roadmaps, and auxiliary tools needed for developing software from the ground up. Our team is also skilled in enhancing existing software, adapting it within your framework for any language desired.</small></p>
      </div>
      <hr></hr>
    </div>
  );
}

export default Localization;
