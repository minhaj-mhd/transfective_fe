import React from 'react';
import Card from './Card.js';
import styles from '@/styles/Banner.module.css';

function WhyCards() {
  return (
    <div className={styles['why-container']}>
      {/* Title Section */}
      <div className={styles['why-title']}>Why Choose Transfective</div>

      {/* First Row - 3 Cards */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Card
          image="/Banner/card1.png"
          title="Decades of Expertise"
          desc="Leverage our vast array of specialized resources and over 14 years of experience in managing intricate training programs."
        />
        <Card
          image="/Banner/card2.png"
          title="Comprehensive Discovery"
          desc="Our dedicated specialists are committed to thoroughly understanding your business objectives, pinpointing precise opportunities to enhance content delivery."
        />
        <Card
          image="/Banner/card3.png"
          title="Streamlined Solutions"
          desc="Eliminate the complexities of your localization efforts with our comprehensive, integrated service."
        />
      </div>

      {/* Second Row - 2 Cards */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <Card
            image="/Banner/card4.png"
            title="Unmatched Quality"
            desc="Avoid the pitfalls of cross-functional miscommunications and enhance overall consistency with our unified approach to content management."
          />
        </div>
        <div className="col">
          <Card
            image="/Banner/card5.png"
            title="Reliable Timeliness"
            desc="Depend on our proven track record of 99% on-time delivery to ensure your training materials are prepared exactly when you need them."
          />
        </div>
      </div>
    </div>
  );
}

export default WhyCards;
