import React, { useState, useEffect } from 'react';
import styles from './newbar.module.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom'



const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [varible, setVaraible] = useState(true)
    const changeState = () => {setVaraible(!varible)}

    const [barshow, setShow] = useState(true)

    window.addEventListener('scroll',function(e) {
        if (this.window.scrollY > 30 && barshow != false){
            setShow(false)
        }else{
            setShow(true)
        }
    })

    const page_values = [{text : "Home", path: ""},
                        {text : "About Me", path: "/aboutme"},
                        {text : "Projects", path: "/projects"},]

    let path = window.location.href.substr((window.location.href.indexOf("/website"))+8)

    return (
        <span>
           <div className={styles.container}>
            <Navbar className={styles.navbar}color="dark" dark expand="md">
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
                <NavbarText>Filler</NavbarText>
                </Collapse>
            </Navbar>
            </div>
        </span>

    );
}

export default Example;