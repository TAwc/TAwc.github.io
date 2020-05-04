import React from 'react';
import styles from './summary.module.css'
//import {Link} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';


import headshot from '../../../images/Headshot(edit) 5-4-2020.jpg'


const Header = () =>  {

    return (
      <span>
          <div className = {styles.main}>
            <div className = {styles.container}>
              <Container fluid={true}>
                <Row>
                  <Col className={styles.aboutMeCol}>
                    <p className={styles.aboutMeText}>About me</p>
                  </Col>
                </Row>
                <Row>
                  <Col sm={1}>
                  </Col>
                  <Col lg={5} className={styles.headshotCol}>
                    <img src={headshot} className={styles.headshotImg} alt="photo of me"/>
                  </Col>
                  <Col lg={5}>
                    <p className={styles.sumtext}>
                      My name is Alexander Waters, A Computer scince and innovation major at Champlain College scheduled to get my degree in May 2020.
                      while excited for almost anything about programming, one of my biggest intrest lies within Artificial intelligence. With Skills I
                      Have built via interships, jobs, classes, and most importantly peronsal projects, Im excited to tackel the next chapter and challenge 
                      of my life. While programming is a big part of my life, I have other hobbies such as photogrpahy and photo/video edditing. Click 
                      around to find out more 
                    </p>
                  </Col>
                  <Col sm={2}>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
      </span>
    );
}

export default Header;
