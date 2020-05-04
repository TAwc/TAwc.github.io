import React, { useState, useEffect } from 'react';
import styles from './header.module.css'
//import {Link} from 'react-router-dom'
import ColoredLine from './coloredline'
import { Container, Row, Col } from 'reactstrap';
import WinDim from '../../windowDemensions'


import twitterImg from "../../../images/twitter.png"
import snapchatImg from "../../../images/snapchat.png"
import InstagramImg from "../../../images/instagram.png"
import youtubeImg from "../../../images/Youtube.png"
import linkedImg from "../../../images/Linkedin.png"
import githubImg from "../../../images/github.png"

import readMoreArrowImg from "../../../images/ReadMoreArrow.png"


const Header = () =>  {

    const { height, width } = WinDim()
    const [size, setSize] =  useState()

    useEffect(() => {
      if(width <= 992){
        setSize("small") 
      }
      else{
        setSize("large")
        
      }
    });
    
      

    var linkData = [
                    {text: "Twitter", img: twitterImg, Link: "https://twitter.com/AlexWatermen1"},
                    {text: "SnapChat", img: snapchatImg, Link: "https://twitter.com/AlexWatermen1"},
                    {text: "Instagram", img: InstagramImg, Link: "https://twitter.com/AlexWatermen1"},
                    {text: "Youtube", img: youtubeImg, Link: "https://twitter.com/AlexWatermen1"},
                    {text: "linked In", img: linkedImg, Link: "https://twitter.com/AlexWatermen1"},
                    {text: "GitHub", img: githubImg, Link: "https://twitter.com/AlexWatermen1"},
                  ]



    return (
      <span>
          <div className = {styles.main}>
            <div className = {styles.center}>
              <Container fluid={true}>
                

                  {
                  size === "large" ? 
                  (
                    <Row>
                      <Col sm ="1">
                      {/* Links */}
                      <ul className = {styles.linkbar}>
                        {
                            linkData.map((link) =>{
                              return (<li key={link.text}><a href={link.link}>
                                        <img src={link.img} className = {styles.SideImgLink} alt ={link.text}/>
                                      </a>
                                      </li>)
                            })
                        }
                      </ul>
                      </Col>

                      <Col sm ="2">

                      </Col>
                      
                      <Col lg = "6">                
                        <h1 className = {styles.name}>Alexander Waters</h1>
                        <ColoredLine color="white"/> {/*update to correct color*/}
                        <h2 className = {styles.description}>A Technical Psycho</h2>
                      </Col>

                      <Col sm='3'>

                      </Col>
                    </Row>

                  ) 
                  
                  
                  :
                  
                  
                  (
                    <Row>                      
                      <Col lg = "6">                
                        <h1 className = {styles.name}>Alexander Waters</h1>
                        <ColoredLine color="white"/> {/*update to correct color*/}
                        <h2 className = {styles.description}>A Technical Psycho</h2>
                      </Col>

                      <Col lg='6'>
                        <div className = {styles.linkbar}>
                        <Container fluid={true}>
                          <Row noGutters>
                          {
                            linkData.map((link) =>{
                              return (<Col xs="2" className={styles.imageLinkHolder} key={link.text}>                 
                                        <a href={link.link}>
                                          <img src={link.img} className = {styles.BotImgLink} alt ={link.text}/>
                                        </a>
                                      </Col>)
                            })
                          }
                          </Row>                          
                          </Container>
                        </div>
                      </Col>
                    </Row>
                  )
                  }
                  
              </Container>
            </div>
            <div className={styles.readMoreContainer}>
              <p className={styles.readMoretext}>Read More</p>
              <div className={styles.ArrowImageHolder}>
                <ul className = {styles.arrowList}>
                  <li classname={styles.arrowImageLI}><img className={styles.readMorearrow} src={readMoreArrowImg} alt="read more"/></li>
                  <li classname={styles.arrowImageLI}><img className={styles.readMorearrow + " " + styles.arrow2} src={readMoreArrowImg} alt="read more"/></li>
                </ul>
              </div>
            </div>
          </div>
      </span>
    );
}

export default Header;
