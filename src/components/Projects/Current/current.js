import React from 'react';
import styles from './current.module.css'
//import {Link} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';


import NA from '../../../images/N-A.PNG'

import NNimg from '../../../images/NN.PNG'



const Future = () =>  {

  const projects = [ 
    [ 
    {name : "Vector Library", description : "A Vector Library a friend an I are building, aiming for performace", pic : NA, link : "https://github.com/trobol/dak_math#", techs : ["C++"]}, 
    {name : "Nerual Network Lib", description : "A long working project, a custom nerual network Library to help me understand them better", pic : NNimg, link : "https://github.com/TAwc/NeuralNetworkLib", techs : ["pyhton","Neural Networks", "Tensorflow", "Numpy"]}],
    ]


  let i = 0;

    return (
      <span>
        <div className = {styles.main}>
          <div className={styles.contentContainer}>
            <div className={styles.titleContainer}>
              <p className={styles.titleText}>Current Projects</p>
            </div>
            <div className={styles.summaryContainer}>
              <p className={styles.summaryText}>
                This section is about projects I am currently working on, There may be an associated repo, not guaranteed. Its possible I am working on an older Project listed above.
              </p>
            </div>
            <div className={styles.bodyContainer}>


              <Container>


              {projects.map((projectset)=>{
                i++
                return (
                  <Row key={i}>
                    {
                      projectset.map((project) =>{
                        return(
                          <Col lg={6} key={project.name}>
                            <div className={styles.projectContainer}>
                              <a href={project.link} className={styles.boxLink} target="_blank" rel="noopener noreferrer">
                                <div className={styles.InternalBox}>

                                  <div className={styles.projectHeaderContainer}>
                                    <p className={styles.projectHeaderText}>
                                      {project.name}
                                    </p>
                                  </div>

                                  <div className = {styles.projectImageContainer}>
                                    <img className={styles.projectImage} src={project.pic} alt="Project"/>
                                  </div>

                                  <div className = {styles.projectBodyContainer}>
                                    <p className={styles.projectBodyText}>
                                      {project.description}
                                    </p>
                                  </div>

                                  <div className = {styles.projectTechContainer}>
                                    
                                    <div className ={styles.techListContianer}>
                                      <ul className = {styles.techList}> 
                                      <p className={styles.usedTechText}>Using Techs:</p>
                                        {
                                          project.techs.map((tech)=>{
                                            i++;
                                            return(
                                              <li className={styles.techItem} key={i}>{tech}</li>
                                            )
                                          })
                                        }

                                      </ul>
                                    </div>
                                    
                                  </div>
                                </div>
                              </a>
                            </div>
                          </Col>
                        )
                      })
                    }
                  </Row>
                )
              })}


               
              </Container>
            </div>
          </div>
        </div>
      </span>
    );
}

export default Future;
