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
    }, [width]);
    
      

    var linkData = [
                    {text: "Twitter", img: twitterImg, link: "https://twitter.com/AlexWatermen1"},
                    {text: "SnapChat", img: snapchatImg, link: "https://www.snapchat.com/add/Peglo1"},
                    {text: "Instagram", img: InstagramImg, link: "https://www.instagram.com/alex_watermen/"},
                    {text: "Youtube", img: youtubeImg, link: "https://www.youtube.com/channel/UCFVVwZYtVi0Wt3xZxQd3Xdg"},
                    {text: "linked In", img: linkedImg, link: "https://www.linkedin.com/in/alexanderwatersli/"},
                    {text: "GitHub", img: githubImg, link: "https://github.com/TAwc"},
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
                      <Col sm ="1" noGutters>
                      {/* Links */}
                      <ul className = {styles.linkbar}>
                        {
                            linkData.map((link) =>{
                              return (<li key={link.text}><a href={link.link} target="_blank" rel="noopener noreferrer">
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
                        <h2 className = {styles.description}>A Technical Style</h2>
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
                        <h2 className = {styles.description}>A Technical Style</h2>
                      </Col>

                      <Col lg='6'>
                        <div className = {styles.linkbar}>
                        <Container fluid={true}>
                          <Row noGutters>
                          {
                            linkData.map((link) =>{
                              return (<Col xs="2" className={styles.imageLinkHolder} key={link.link} >                  
                                        <a href={link.link} className={styles.ImgLink} target="_blank" rel="noopener noreferrer">
                                          <img src={link.img} className = {styles.BotImgLink} alt ={link.text} />
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
                  <li className={styles.arrowImageLI}><img className={styles.readMorearrow} src={readMoreArrowImg} alt="read more"/></li>
                  <li className={styles.arrowImageLI}><img className={styles.readMorearrow + " " + styles.arrow2} src={readMoreArrowImg} alt="read more"/></li>
                </ul>
              </div>
            </div>
          </div>
      </span>
    );
}

export default Header;
