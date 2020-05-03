import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,  Redirect,  Switch, Route}  from 'react-router-dom';

import Navbar from './components/Navbar/navbar'


import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Homepage from './pages/Homepage/homepage'
import AboutMe from './pages/AboutMe/aboutme'
import Projects from './pages/Projects/projects'


import Example from './components/Navbar/newNav'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Example/>
      <Switch>
        <Route exact path = {process.env.PUBLIC_URL + ""} component = {Homepage}/>
        <Route path = {process.env.PUBLIC_URL + "/aboutme"} component = {AboutMe}/>
        <Route path = {process.env.PUBLIC_URL + "/Projects"} component = {Projects}/>
        <Redirect to= {process.env.PUBLIC_URL + ""} /> }
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

