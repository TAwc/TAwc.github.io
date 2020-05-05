import React from 'react';
//import styles from './homepage.module.css'
//import {Link} from 'react-router-dom'
//{ useState, useEffect } 

import Header from "../../components/Homepage/Header/header"
import Summary from "../../components/Homepage/Summary/summary"
import Techs from "../../components/Homepage/Tech Background/techs"
import Projects from "../../components/Homepage/Project Highlight/projects"
import footer from "../../components/Footer/footer"
import Footer from '../../components/Footer/footer';

const Homepage = () =>  {

    return (
      <span>
        <Header/>
        <Summary/>
        <Techs/>
        <Projects/>
        <Footer/>
      </span>
    );
}

export default Homepage;

