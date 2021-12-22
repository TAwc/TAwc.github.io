import React from 'react';
import styles from './techs.module.css'
//import {Link} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';


const Techs = () =>  {

  const github = "https://github.com/A-Waters"

  let i=0;
  const techs = [
                  {label : "Languages", list : ["Python", "C++", "Javascript","Bash", "ASM"]},
                  {label : "Technologies", list : ["React", "Electron", "Django","Git", "Linux/unix"]},
                  {label : "Concepts", list : ["Machine Learning", "Reverse engineering", "Data structures", "Multithreading", "Asynchronous"]},
                  {label : "Open source", list : [
                    <a className={styles.inlineLink} href={github}>github</a>,
                    <a className={styles.inlineLink} href={"https://github.com/CSI-280/playdogplay"}>CSI-280/playdogplay</a>,
                    <a className={styles.inlineLink} href={"https://github.com/CSI-280/MusicGames"}>CSI-280/MusicGames</a>]
                  },
                ]



    return (
      <span>
         <div className = {styles.main}>
           <div className = {styles.techsContainer}>
            <h2 className={styles.sectionHeader}>TECHS</h2>

            <div className={styles.summaryContainer}>
              <p className={styles.summaryText}>In this following section are a few of the technologies I am familiar with. You can find more about most items listed below listed in my <a className={styles.inlineLink} href={github}>github</a></p> 
            </div>
            <Container>
              <Row>



                {
                    techs.map((tech) =>{
                      return (
                        <Col sm key={tech.label}>
                          <div className = {styles.listHolder} >
                              <ul className={styles.titleText}>{tech.label }
                              {
                                tech.list.map((item) => {
                                  i++;
                                  return (
                                        <li key={i} className={styles.descriptText}>{item}</li>
                                  )
                                  
                                })
                                
                              }
                              </ul>
                            </div>
                        </Col>
                      )
                    })
                }



              </Row>

              <Row>

              </Row>
            </Container>
           </div>
         </div>
      </span>
    );
}

export default Techs;
