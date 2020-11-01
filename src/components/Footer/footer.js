import React from 'react';
import styles from './footer.module.css'
import {Link} from 'react-router-dom'

import { Container, Row, Col, NavLink } from 'reactstrap';




const Footer = () =>  {

  const items = [
                {text: "Twitter", link: "https://twitter.com/AlexWatermen1"},
                {text: "SnapChat", link: "https://www.snapchat.com/add/Peglo1"},
                {text: "Instagram", link: "https://www.instagram.com/alex_watermen/"},
                {text: "Youtube", link: "https://www.youtube.com/channel/UCFVVwZYtVi0Wt3xZxQd3Xdg"},
                {text: "linked In", link: "https://www.linkedin.com/in/alexanderwatersli/"},
                {text: "GitHub", link: "https://github.com/TAwc"},
              ]

    return (
      <span>
         <div className = {styles.main}>
          <div className = {styles.ListContainer}>
           <Container>
             <Row>
                <Col>
                  <NavLink tag={Link} to={process.env.PUBLIC_URL + '/contact'} className={styles.contact_nav}> <p className={styles.itemText}>Contact</p></NavLink>
                </Col>
               {
                 items.map((item)=>{
                  return (
                    <Col key={item.text}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer"><p className={styles.itemText}>{item.text}</p></a>
                    </Col>
                  )
                 })
               }
             </Row>
           </Container>
          </div>
         </div>
      </span>
    );
}

export default Footer;
