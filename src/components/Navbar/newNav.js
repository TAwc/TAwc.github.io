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

    const [varible, setVaraible] = useState(true)
    const changeState = () => {setVaraible(!varible)}

    const [barshow, setShow] = useState(false)

    

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
                console.log("setting false")
                
            }else if (this.window.scrollY !== 0 && !barshow){
                setShow(true)
                console.log("setting true")
            }
            console.log(window.scrollY)
            //not Mine

        }, 200);
    }

    addEffect('scroll', scrollHandeler, true)
    

    const page_values = [{text : "Home", path: ""},
                        {text : "About Me", path: "/aboutme"},
                        {text : "Projects", path: "/projects"},]


    return (
        <span>
            {
                barshow === false ? 
                (<div className={styles.container}>
                    <Navbar className={styles.navbarTop} color="dark" dark expand="md">
                        <NavbarBrand className={styles.brand} href={process.env.PUBLIC_URL}>Alexnader Waters</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                {
                                    page_values.map((page) => {
                                        return (<NavItem key = {page.path}> 
                                                    <NavLink tag={Link} to={process.env.PUBLIC_URL + page.path} onClick={changeState} className={styles.link}>{page.text}</NavLink>
                                                </NavItem>
                                        )
                                    })
                                }
                            </Nav>
                        <NavLink className = {styles.git} href="https://github.com/TAwc/website">Contact</NavLink> {/*Update to contact page*/}
                        </Collapse>
                    </Navbar>
                </div>)


                :



                (
                <div className={styles.container}>
                    <Navbar className={styles.navbarNorm}color="dark" dark expand="md">
                        <NavbarBrand className={styles.brand} href={process.env.PUBLIC_URL}>Alexnader Waters</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                {
                                    page_values.map((page) => {
                                        return (<NavItem key = {page.path}> 
                                                    <NavLink tag={Link} to={process.env.PUBLIC_URL + page.path} onClick={changeState} className={styles.link}>{page.text}</NavLink>
                                                </NavItem>
                                        )
                                    })
                                }
                            </Nav>
                        <NavLink className = {styles.git} href="https://github.com/TAwc/website">Contact</NavLink> {/*Update to contact page*/}
                        </Collapse>
                    </Navbar>
                </div>
                )
            }





           
        </span>

    );
}

export default Example;