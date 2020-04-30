import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,  Redirect,  Switch, Route}  from 'react-router-dom';

import './index.css';


import Homepage from './pages/Homepage/homepage'
import AboutMe from './pages/AboutMe/aboutme'
import Projects from './pages/Projects/projects'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {Homepage}/>
        <Route path = "/aboutme" component = {AboutMe}/>
        <Route path = "/Projects" component = {Projects}/>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
