import React from 'react';
import styles from './background.module.css'
//import {Link} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';

import Carousel  from '../../carousel'


let slides = [
            {
              src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
              altText: 'Slide 1',
              caption: 'Slide 1'
            },
            {
              src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
              altText: 'Slide 2',
              caption: 'Slide 2'
            },
            {
              src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
              altText: 'Slide 3',
              caption: 'Slide 3'
            }
            ];

const Background = () =>  {
    return (
      <span>
        <div className = {styles.main}>
          <div className ={styles.sectionContainer}>
            <Container fluid={true}>
              <Row>
                <Col lg={1}></Col>
                <Col lg={4}>
                  <div className={styles.carouselContainer}>
                    <Carousel>{slides}</Carousel>
                  </div>
                </Col>
                <Col lg={5}>
                  <div className={styles.aboutMeContainer}>
                    <div className={styles.aboutMeTitleContainer}>
                      <p className={styles.aboutMeTitle}>About Me</p>
                    </div>
                    <div className={styles.aboutMeParContainer}>
                      <p className={styles.aboutMePar}>
                          &emsp; Born in the year 2000, I grew up in a small town known as new fairfield, Conneticut. 
                          With living in such a small town there wasnt alot to do leaving me home with basicly my games and computers most days. 
                          Durring this time I became very intereted in <b>videos games</b>, and started thinking about how I, <b>myself</b>, would <b>create</b> a game. 
                          Being seven at the time with 0 background info on computers led me to have many things I found on google go stright over my head.
                          Years passed but I never fotgot about this dream of making games and over my middle school years I also be came more intereted in 
                          technology in general. In middle school I created the worse possibly designed website for a school project containng apoximently 
                          5 lines of code using raw <b>html</b> and <b>css</b>, but Its where everything started. After this a year or two later I picked up <b>python</b> and 
                          did some small scripts using python just playing around with the code. Durring this time im seeing all these cool key concepts 
                          that I had no idea how they worked but the results were awesome, such as <b>neural networks</b> and <b>multithreading</b>. I also started 
                          learning the basics of programming sturcutre in a robotics class learning some small unknown programming languge forgotten to time. My juniour 
                          year I took my first real computer science class that was learning the languauge <b>Java</b> introudicng me <b>OOP</b> which enedup being a 
                          big breakthough for me. Being top of my class (humble brag) I devoured the content and took off after this, starting to look 
                          more closely at the topics iv heard befoer but never fully understood. At this point, I knew what I loved. After another 
                          class and my own self devolpment taking on small <b>side projects</b> in python, I enrolled In <b>champlain college</b> for cyber sercutiry. 
                          cyber sercutiry was always an intrest to me and i felt had alot to do with programming, however i quickly the champlain college 
                          version did not involve programming that much. That is when I switched to <b>computer scince and Innovation</b>, and to learn 
                          cyber sercutiry at my own speed, my way. Currently as wrighting this, I have learned alot since seven year old me first 
                          started thinking about how to make a ball move on a TV screen and I dont regret any choice iv made so far to become the best 
                          programmer I can be.
                        </p>
                    </div>
                  </div>
                </Col>
                <Col lg={1}></Col>
              </Row>
            </Container>
          </div>
          
        </div>
      </span>
    );
}

export default Background;
