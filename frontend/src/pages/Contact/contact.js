import React from 'react';
import styles from './contact.module.css'

import Footer from '../../components/Footer/footer'


const AboutMe = () =>  {
   
    return (
      <div className={styles.main}>
          <div className ={styles.sectionBody}>
            <div className={styles.center}>
              <p className={styles.email}>Email:</p>
              <p className={styles.email}>contact@alexwaters.dev</p>
            </div>
          </div>
          <Footer/>
      </div>
    );
}

export default AboutMe;