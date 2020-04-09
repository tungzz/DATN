import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Topmenu from './component/Topmenu'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return(
    <Router>
      <Topmenu />
      <Route path="/" exact component={Home}/>
      <Route path="/products/" exact component={Products}/>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />,rootElement);