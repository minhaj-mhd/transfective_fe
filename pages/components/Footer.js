import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Banner.module.css';

function Footer() {
  return (
    <div className={styles["footer-container"]}> {/* Add a container for better structure */}
      <div className={styles["footer-logo"]}>
        <Image src="/icons/logo.png"  alt="Logo" width={300} height={30} />
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="row">
              {/* Quick Links */}
              <div className="col text-start text-secondary">
                <h4>Quick Links</h4>
                <small>About Us</small><br />
                <small>Blog</small><br />
                <small>Our Process</small><br />
                <small>Technology</small><br />
                <small>Industries</small>
              </div>

              {/* Services */}
              <div className="col text-start text-secondary">
                <h4>Services</h4>
                <small>Translation Services</small><br />
                <small>Software Localization & Testing</small><br />
                <small>Desktop Publishing Services</small><br />
                <small>Training & E-Learning Services</small><br />
                <small>Website Localization Services</small><br />
                <small>Multimedia Services</small><br />
                <small>Multicultural Marketing Services</small><br />
                <small>Call Center Support Services</small><br />
                <small>Interpretation Services</small><br />
                <small>Legal Services</small>
              </div>

              {/* Industries */}
              <div className="col text-start text-secondary">
                <h4>Industries</h4>
                <small>E-Commerce Retail</small><br />
                <small>Software Localization & Testing</small><br />
                <small>Life Sciences</small><br />
                <small>Legal</small><br />
                <small>Multimedia Entertainment</small><br />
                <small>Banking & Finance</small><br />
                <small>Advertising, Marketing & PR</small><br />
                <small>Government</small><br />
                <small>Hardware, Software & Technology</small><br />
                <small>Energy & Mining</small><br />
                <small>Travel & Hospitality</small><br />
                <small>Industrial & Manufacturing</small>
              </div>
            </div>
          </div>

          {/* World Map */}
          <div className="col">
            <Image src="/Banner/worldmap.png"  width={567} height={333} alt="World Map" />
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-between align-items-center">
  <div class="col-auto">
  <div class="row">
    <div class="col">
      <Image src="/icons/sm1.png" width={33} height={33}></Image>
    </div>
    <div class="col">
    <Image src="/icons/sm2.png" width={33} height={33}></Image>

    </div>
    <div class="col">
    <Image src="/icons/sm2.png" width={33} height={33}></Image>

    </div>
  </div>
  </div>
  <div class="col-auto">
    <small>Copyright 2024 Transfective All Rights Reserved</small> 
  </div>
</div>

    </div>
  );
}

export default Footer;
