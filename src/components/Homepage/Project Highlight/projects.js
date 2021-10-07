import React from 'react';
import styles from './projects.module.css'
import {Link} from 'react-router-dom'

import { Table, Button,} from 'reactstrap';



const Projects = () =>  {

  
    const projetcs = [
                {
                  name: "messaging-service", 
                  desc: "A simple messaging service made for a class", 
                  repo: "https://github.com/A-Waters/messaging-service",
                  type: "github"
                },
                {
                  name: "Full Stack Twitter Clone", 
                  desc: "A Program Built in MySQL, React, and Express.js", 
                  repo: "https://github.com/A-Waters/twitter_database",
                  type: "github"
                },
                {
                  name: "Chess Engine", 
                  desc: 'A Simple Chess engine using bitboard', 
                  repo: "https://github.com/A-Waters/bitboard-chess",
                  type: "github"
                },
  
                ]


    return (
      <span>
        <div className={styles.main}>
          <div className={styles.sectionContainer}>
            <div className={styles.titleContainer}>
              <p className={styles.titleText}>Project Highlights</p>
            </div>
            <div className={styles.descContainer}>
              <p className={styles.descText}>A few of my notable projects</p>
            </div>
            <div className={styles.projetcListContainer}>
              <Table hover size="sm"> 
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Repo</th>
                  </tr>
                </thead>
                <tbody>


                  {
                    projetcs.map((project)=>{
                      return (
                        <tr key={project.name}>
                          <td>{project.name}</td>
                          <td>{project.desc}</td>
                          <td><a href={project.repo}>{project.type}</a></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            </div>
            <div className = {styles.seeMoreContainer}>
                <Button outline color="info" tag={Link} to={process.env.PUBLIC_URL + "/projects"} onClick={()=>{window.scrollTo(0, 0)}}>See More</Button>
            </div>
          </div>
        </div>
      </span>
    );
}

export default Projects;
