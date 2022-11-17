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
                    <img src={headshot} className={styles.headshotImg} alt="me"/>
                  </Col>
                  <Col lg={5}>
                    <p className={styles.sumtext}>
                    My name is Alexander Waters, a Computer Science and Innovation major at Champlain College graduating in May 2022. 
                    While excited for anything that involves programming, one of my biggest interests lie in Artificial Intelligence. 
                    With the skills I have acquired via internship, jobs, classes, and personal projects, 
                    I am excited to tackle the next chapter of my life. 
                    When I am not busying myself with programming, I love to work with photography and photo/video editing as well.
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
