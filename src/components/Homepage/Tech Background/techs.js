import React from 'react';
import styles from './techs.module.css'
//import {Link} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';


const Techs = () =>  {

  const github = "https://github.com/TAwc"

  let i=0;
  const techs = [
                  {label : "Languages", list : ["python", "c++", "java", "Javascript","html","css","c#","processing","bash"]},
                  {label : "Frameworks", list : ["react", "electorn", "django"]},
                  {label : "Concepts", list : ["neural networks", "pathfinding (A*)", "discord bots", "unity programming",
                                                "data stuctures","web scraping (legally)","github pages (this)","linux/unix", "multithreading", "asynchronous"]},
                  {label : "Open source", list : [
                    <a className={styles.inlineLink} href={github}>github</a>,
                    <a className={styles.inlineLink} href={"https://github.com/CSI-280/playdogplay"}>CSI-280/playdogplay</a>,
                    <a className={styles.inlineLink} href={"https://github.com/CSI-280/MusicGames"}>CSI-280/MusicGames</a>]
                  },
                  {label : "Python Libs", list : ["pandas", "numpy", "tkinter", "tensorflow", "python networking", "matplotlib"]},
                ]



    return (
      <span>
         <div className = {styles.main}>
           <div className = {styles.techsContainer}>
            <h2 className={styles.sectionHeader}>Techs</h2>

            <div className={styles.summaryContainer}>
              <p className={styles.summaryText}>In this following section is a few of the technologies I have used in the past or currently. You can find more about most items listed below listed in my <a className={styles.inlineLink} href={github}>github</a></p> 


            </div>
            <Container fluid={true}>
              <Row>
                <Col sm={2}></Col>


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


                <Col sm={2}></Col>
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
