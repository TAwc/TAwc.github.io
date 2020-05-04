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
                  <Col lg={4} className={styles.headshotCol}>
                    <img src={headshot} className={styles.headshotImg} alt="photo of me"/>
                  </Col>
                  <Col lg={5}>
                    <p className={styles.sumtext}>
                    My name is Alexander Waters, A Computer since and innovation major at Champlain College scheduled to get my degree in May 2020. 
                    while excited for almost anything about programming, one of my biggest interest lies within Artificial intelligence. 
                    With skills I have built via an internship, jobs, classes, and most importantly personal projects, I'm excited to tackle the next 
                    chapter and challenge in my life. While programming is a big part of my life, I have other hobbies such as photography and photo/video 
                    editing. Click around to find out more
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
