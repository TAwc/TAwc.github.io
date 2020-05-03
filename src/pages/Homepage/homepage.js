import React from 'react';
import styles from './homepage.module.css'
//import {Link} from 'react-router-dom'
//{ useState, useEffect } 

import Header from "../../components/Homepage/Header/header"
import Summary from "../../components/Homepage/Summary/summary"

const Homepage = () =>  {

    return (
      <span>
        <Header/>
        <Summary/>
      </span>
    );
}

export default Homepage;

