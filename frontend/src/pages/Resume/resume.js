import React from 'react';
//import styles from './aboutme.module.css'

import Footer from '../../components/Footer/footer'
import ResumeViewer from '../../components/Resume/ResumeViewer/ResumeViewer'


const Resume = () =>  {

    return (
      <div className = 'test'>
          <ResumeViewer/>
          <Footer/>
      </div>
    );
}

export default Resume;