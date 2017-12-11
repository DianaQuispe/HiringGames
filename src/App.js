import React, { Component } from 'react';
import './App.css';
import {Menu} from './Components/firstView';
import {Grid} from 'react-bootstrap';
import {connect} from 'redux-zero';
import Layers from "./Components/Layers";
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";


const App = () => {
  return <Grid fluid>
      <HashRouter>
        <Switch>
          <Route name="menu" exact path="/" component={Menu} />
          <Route name="layers" exact path="/layers" component={Layers} />
          <Route name="menu" exact path="/menu" component={Menu} />
        </Switch>
      </HashRouter>
    </Grid>;
}

export default App;
