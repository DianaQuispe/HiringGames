import React, { Component } from 'react';
import './App.css';
import {Menu} from './Components/firstView';
import {Grid} from 'react-bootstrap';
import {connect} from 'redux-zero';


const App = () => {
  return (
    <Grid fluid>
      <Menu  />
    </Grid>
  );
}

export default App;
