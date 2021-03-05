import React from 'react';
import styles from './past.module.css'
//import {Link} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';


import ASimg from '../../../images/A-Star..PNG'
import Chatimg from  '../../../images/Chat.PNG'
import Coronaimg from '../../../images/Corona.PNG'
import NNimg from '../../../images/NN.PNG'
import SnakeImg from '../../../images/snake.PNG'
import Websiteimg from '../../../images/Website.PNG'



const Past = () =>  {

    const projects = [ 
                      [ {name : "Website", description : "This Project is the one you are currently Viewing", pic : Websiteimg, link : "https://github.com/TAwc/website", techs : ["react","react-router-dom","reactstrap"]}, 
                        {name : "Chat Service", description : "A simple Chat system made to send messages between users using dedicated servers", pic : Chatimg, link : "https://github.com/TAwc/messaging-service", techs : ["Python","sockets","networking"]}],
                      [ {name : "Campus-AStar-pathing", description : "A very simple node based path finding algorithm for my college campus", pic : ASimg, link : "https://github.com/TAwc/Campus-AStar-pathing", techs : ["Processings", "A*"]}, 
                        {name : "Neural Network Lib", description : "A long working project, a custom nerual network Library to help me understand them better", pic : NNimg, link : "https://github.com/TAwc/NeuralNetworkLib", techs : ["Python","Nerual Networks", "Tensorflow", "Numpy"]}],
                      [ {name : "COVID-19 Visualizer", description : "A data set graphed created and used to watch the rise and fall of covid 19 cases", pic : Coronaimg, link : "https://github.com/TAwc/corona_visualization", techs : ["Python", "tkinter", "matplotlib"]}, 
                        {name : "Snake-Game", description : "A implimention of the classic game snake, going to be used in latter projetcs for AI", pic : SnakeImg, link : "https://github.com/TAwc/Snake-Game", techs : ["Python","tkinter"]} ] 
                    ]

    let github = 'https://github.com/TAwc'

    let i = 0;

    return (
      <span>
        <div className = {styles.main}>
        <div className={styles.contentContainer}>
            <div className={styles.titleContainer}>
              <p className={styles.titleText}>Past Projects</p>
            </div>
            <div className={styles.summaryContainer}>
              <p className={styles.summaryText}>
              Projects I have worked and continue to improve on.  Click on a box to be taken to the repositry.<br></br>
              Click here to browse <a href={github} className={styles.inlineLink} target="_blank" rel="noopener noreferrer">github</a> as well.
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
