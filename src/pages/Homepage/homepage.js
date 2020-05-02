import React, { useState, useEffect } from 'react';
import styles from './homepage.module.css'
import {Link} from 'react-router-dom'
import Navbar from '../../components/Navbar/navbar'


const Homepage = () =>  {

    return (
      <div>
          <h1 className={styles.h1}>Hello</h1>
      </div>
    );
}

export default Homepage;

