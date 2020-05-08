import React, { useState } from 'react';
import styles from './newbar.module.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Link} from 'react-router-dom'
import addEffect from '../useEvent'



const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [date, renew] = useState(true)
    const update = () => renew(!date)

    const [barshow, setShow] = useState(false)

    
    const getPath = (window.location.href.substr((window.location.href.indexOf("/website"))+8))
    

    // https://www.onlywebpro.com/2017/03/25/optimize-scrolling-performance-by-debouncing-scroll-event-calls/
    var debounce_timer;
    const scrollHandeler = function() {
        if(debounce_timer) {
            window.clearTimeout(debounce_timer);
        }
        debounce_timer = window.setTimeout(function() {

            //Mine
            if (this.window.scrollY === 0 && barshow ){
                setShow(false)
                
            }else if (this.window.scrollY !== 0 && !barshow){
                setShow(true)
            }

            //not Mine

        }, 150);
    }

    addEffect('scroll', scrollHandeler, true)
    
    const scrollMove = (location) =>{window.scrollTo({
        top: location,
        left: 0,
        
    });}


    const page_values = [{text : "Home", path: "/"},
                        {text : "About Me", path: "/aboutme"},
                        {text : "Projects", path: "/projects"},];

    return (
        <span>

            <div className={styles.container}>
            {
                  
                (barshow === false && getPath === "/")? 

                //AT TOP AND HOME 
                (
                    <div className={styles.container}>
                        <Navbar className={styles.navbarTop} color="dark" dark expand="md">
                            <NavbarBrand className={styles.brand} href={process.env.PUBLIC_URL}>Alexander Waters</NavbarBrand>
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    {
                                        page_values.map((page) => {
                                            //console.log("rendering TOP")
                                            //console.log("Path", getPath)
                                            return (<NavItem key = {page.path}> 
                                                        <NavLink tag={Link} to={process.env.PUBLIC_URL + page.path} onClick={() => {update(); scrollMove(0)}} className={styles.link}>{page.text}</NavLink>
                                                    </NavItem>
                                            )
                                        })
                                    }
                                </Nav>
                            <NavLink className = {styles.git} to={process.env.PUBLIC_URL + '/contact' } tag={Link}>Contact</NavLink> {/*Update to contact page */}
                            </Collapse>
                        </Navbar>
                    </div>
                )


                :

                //NOT AT TOP AND NOT HOME 

                (
                    
                <div className={styles.container}>
                    <Navbar className={styles.navbarNorm}color="dark" dark expand="md">
                        <NavbarBrand className={styles.brand} href={process.env.PUBLIC_URL}>Alexnader Waters</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                {
                                    page_values.map((page) => {
                                        //console.log("rendering BOT")
                                        //console.log("Path", getPath)
                                        return (<NavItem key = {page.path}> 
                                                    <NavLink tag={Link} to={process.env.PUBLIC_URL + page.path} onClick={() => {update(); scrollMove(0)}} className={styles.link}>{page.text}</NavLink>
                                                </NavItem>
                                        )
                                    })
                                }
                            </Nav>
                        <NavLink className = {styles.git} to={process.env.PUBLIC_URL + '/contact'} tag={Link}>Contact</NavLink> {/*Update to contact page */}
                        </Collapse>
                    </Navbar>
                </div>
                )
            } 
            </div>
        </span>
    );
}

export default Example;