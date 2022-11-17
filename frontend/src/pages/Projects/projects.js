import React from 'react';
//import styles from './projects.module.css'


import Future from '../../components/Projects/Future/future'
import Current from '../../components/Projects/Current/current'
import Past from '../../components/Projects/Past/past'
import Footer from '../../components/Footer/footer'

const Projects = () =>  {

    return (
      <div>
        <Current/>
        <Past/>
        <Future/>
        <Footer/>
      </div>
    );
}

export default Projects;