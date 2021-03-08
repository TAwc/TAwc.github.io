import React from 'react';
import styles from './SAS.module.css'
//import {Link} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap';




const SAS = () =>  {

  const skills = [ 
                    [ {skill: "Teamwork ", why : "In a student ran project in highschool I had a team of ~seven members who I worked with for 4 years fixing the worlds toughest challenges.", 
                        example : "Clothsed-Out", link : "https://sites.google.com/newfairfieldschools.org/clothesed-out/home"},
                      {skill: "Self efficient", why : "Over the years, I have tought myself many things, that were never taught to me such as neural networks.",
                          example : "Neural Network Lib", link : "https://github.com/TAwc/NeuralNetworkLib"}],
                    [ {skill: "Public Speaking ", why : "During a year long competitions my school would be in, I would commonly present our ideas and projects to many.", 
                        example : "DA11", link : "https://sites.google.com/newfairfieldschools.org/clothesed-out/home"}, 
                      {skill: "Communication ", why : "Working in a team for so long teaches you that you have to approach everyone differently.", 
                        example : "L3D", link : "https://sites.google.com/newfairfieldschools.org/l3d/"}],
                    [ {skill: "Adaptability ", why : "In highschool, I worked in as an audio technician, and when nothing worked I had to create a solution and fast.", 
                        example : "Show Listing", link : "https://www.broadwayworld.com/connecticut/regional/THE-ADDAMS-FAMILY-SCHOOL-EDITION-New-Fairfield"}, 
                      {skill: "Trouble Shooting ", why : "Over the years, I have spent many Years between I.T. and programming, and it left quite a background of troubleshooting behind me.", 
                        example : "Github", link : "https://github.com/TAwc"}],
                  ] 

    let i = 0;

    return (
      <span>
        <div className = {styles.main}>
          <div className={styles.contentContainer}>
            <div className={styles.titleContainer}>
              <p className={styles.titleText}>Skills and Strengths</p>
            </div>
            <div className={styles.bodyContainer}>


              <Container>


              {skills.map((skillset)=>{
                i++
                return (
                  <Row key={i}>
                    {
                      skillset.map((skill) =>{
                        return(
                          <Col key={skill.skill}>
                            <div className={styles.itemContainer}>
                              <div className={styles.skillHeaderContainer}>
                                <p className={styles.skillHeaderText}>
                                  {skill.skill}
                                </p>
                              </div>

                              <div className = {styles.skillBodyContainer}>
                                <p className={styles.skillBodyText}>
                                  {skill.why}
                                </p>
                              </div>

                              <div className = {styles.skillExampleContainer}>
                                <p className={styles.skillExampleText}>
                                  <a className={styles.exampleLink} href={skill.link} target="_blank" rel="noopener noreferrer">{skill.example}</a>
                                </p>
                              </div>
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

export default SAS;
