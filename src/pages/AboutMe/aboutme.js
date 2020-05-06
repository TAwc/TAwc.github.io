import React from 'react';
import styles from './aboutme.module.css'

import Footer from '../../components/Footer/footer'
import SAS from '../../components/AboutMe/SAS/SAS'
import Future from '../../components/AboutMe/Future/future'
import Background from '../../components/AboutMe/Background/background'

const AboutMe = () =>  {
   
    return (
      <div>
          <Background/>
          <SAS/>
          <Future/>
          <Footer/>
      </div>
    );
}

export default AboutMe;