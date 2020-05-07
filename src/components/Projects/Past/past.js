import React from 'react';
import styles from './past.module.css'
//import {Link} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';


import pict from '../../../images/Headshot(edit) 5-4-2020.jpg' 

const Past = () =>  {

    const projects = [ 
                      [ {name : "Website", description : "This Project is the one you are currently Viewing", pic : pict, link : "https://github.com/TAwc/website", techs : ["react","react-router-dom","reactstrap"]}, 
                        {name : "Chat Service", description : "A simple Chat system made to send messages between users using dedicated servers", pic : pict, link : "https://github.com/TAwc/messaging-service", techs : ["Python","sockets","networking"]}],
                      [ {name : "Campus-AStar-pathing", description : "A very simple node based path finding algorithm for my college campus", pic : pict, link : "https://github.com/TAwc/Campus-AStar-pathing", techs : ["Processings", "A*"]}, 
                        {name : "Neural Network Lib", description : "A long working project, a custom nerual network Library to help me understand them better", pic : pict, link : "", techs : ["pyhton","Neural Networks", "Tensorflow", "Numpy"]}],
                      [ {name : "COVID-19 Visualizer", description : "Nothing speical, but i used this to watch the grow and fall of covid 19", pic : pict, link : "", techs : ["Pyhton", "tkinter", "matplotlib"]}, 
                        {name : "Snake-Game", description : "A implimention of the classic game snake, going to be used in latter projetcs for AI", pic : pict, link : "", techs : ["Pyhton","tkinter"]} ] 
                    ]


    let i = 0;

    return (
      <span>
        <div className = {styles.main}>
        <div className={styles.contentContainer}>
            <div className={styles.titleContainer}>
              <p className={styles.titleText}>Past Projects</p>
            </div>
            <div className={styles.bodyContainer}>


              <Container>


              {projects.map((projectset)=>{
                i++
                return (
                  <Row key={i}>
                    {
                      projectset.map((project) =>{
                        console.log(project.name)
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
                                    <img className={styles.projectImage} src={project.pic}/>
                                  </div>

                                  <div className = {styles.projectBodyContainer}>
                                    <p className={styles.projectBodyText}>
                                      {project.description}
                                    </p>
                                  </div>

                                  <div className = {styles.projectTechContainer}>
                                    
                                    <div className ={styles.techListContianer}>
                                      <ul className = {styles.techList}> 
                                      <p className={styles.usedTechText}>Used Tech:</p>
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

export default Past;
