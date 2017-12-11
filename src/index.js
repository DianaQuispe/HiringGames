import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "redux-zero/react";
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
