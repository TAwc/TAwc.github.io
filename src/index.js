import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,  Redirect,  Switch, Route}  from 'react-router-dom';



import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar/newNav'

import Homepage from './pages/Homepage/homepage'
import AboutMe from './pages/AboutMe/aboutme'
import Projects from './pages/Projects/projects'
import Contact from './pages/Contact/contact'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path = {process.env.PUBLIC_URL + ""} component = {Homepage}/>
        <Route path = {process.env.PUBLIC_URL + "/aboutme"} component = {AboutMe}/>
        <Route path = {process.env.PUBLIC_URL + "/Projects"} component = {Projects}/>
        <Route path = {process.env.PUBLIC_URL + "/contact"} component = {Contact}/>
        <Redirect to= {process.env.PUBLIC_URL + ""} /> }
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

