import React from 'react';
import styles from './background.module.css'
//import {Link} from 'react-router-dom'
import Carousel  from '../../carousel'


import montral from '../../../images/Montreal.JPG'
import headshot from '../../../images/Headshot 5-4-2020.JPG'
import leaves from '../../../images/Leaves.JPG'
import Hike from '../../../images/Hiking.jpg'

let slides = [
            {
              src: montral,
              altText: 'Montreal',
              caption: 'A visit To Montreal'
            },
            {
              src: headshot,
              altText: 'Headshot',
              caption: 'Its a headshot'
            },
            {
              src: leaves,
              altText: 'Leaves',
              caption: 'Playing in leaves'
            },
            {
              src: Hike,
              altText: 'Hike',
              caption: 'On top of Mount Mansfield'
            }
            ];

const Background = () =>  {

    return (
      <span>
        <div className = {styles.main}>
          <div className ={styles.sectionContainer}>

              <div className={styles.carouselContainer}>
                <Carousel>{slides}</Carousel>
              </div>
              <div className={styles.aboutMeContainer}>
                <div className={styles.aboutMeTitleContainer}>
                  <p className={styles.aboutMeTitle}>About Me</p>
              </div>
              <div className={styles.aboutMeParContainer}>
                <p className={styles.aboutMePar}>
                  &emsp; I was born in 2000 and grew up in a small Connecticut town. 
                  There was not a lot to do in such a small town, leaving me with my games and computers most days.
                  During this time, I became very interested in <b>videos games</b> and began thinking about how I, <b>myself</b>, would <b>create</b> a game. 
                  I was seven at the time with zero background on computers, so that many of the things I found on google went straight over my head at the time.
                </p>
                <p className={styles.aboutMePar}>
                  &emsp; Years passed but I never forgot about this dream of making games. 
                  In middle school I be came more interested in technology and created possibly the worst designed website for a school project — containing apoximently 
                  5 lines of code using raw <b>html</b> and <b>css</b>. However, this is where everything started. 
                </p>

                <p className={styles.aboutMePar}>
                  &emsp; A year or two later, I picked up <b>python</b> and began playing around with the code. 
                  I started to discover many cool key concepts — but I had no idea idea how they worked — 
                  I knew the results were awesome. This included <b>neural networks</b> and <b>multithreading</b>.
                </p>

                <p className={styles.aboutMePar}>
                  &emsp; In high school, I started to learn the basics of programming structures in a <b>robotics</b> class. 
                  We were learning some small, unknown, programming language forgotten by time. 
                  I took my first real <b>computer science</b> class in my junior year and discovered <b>Java</b>, which then introduced me to <b>OOP</b>. 
                  This was a big breakthrough for me. Being in the top of my class (humble brag), I devoured the content and took off, 
                  looking closely at the topics I'd heard about but never fully understood. 
                </p>

                <p className={styles.aboutMePar}>
                  &emsp; At this point, I knew what I loved. Programming. After some more exploration and self-development with <b>side projects</b> in python, 
                  I enrolled in <b>Champlain College</b>. I decided on a major of <b>Computer Science and Innovation</b>. 
                  As I am writing this, I am reflecting on how much I have learned since that small seven-year-old me decided he wanted to create his own cool moves on a video game 
                  for the world to see. I’ve made a lot of choices and decisions to get to this point and will continue to become the best programmer I can be.
                </p>
              </div>
            </div>

          </div>
          
        </div>
      </span>
    );
}

export default Background;
