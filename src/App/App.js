import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';
// import logo from './logo.svg';
import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import './App.scss';

// component is also a class. my class 'app' gets all the info from component.
// where you have variables, you put {} around. look at logo for i.e.
// you can use javascript in jsx.
// put everything in a container bc you cannot have siblings in a div.
// you must have a render! you have to have a return.
// the return is basically what html that you want. it's written in jsx, the language of html?

// FIREBASE CALL
class App extends Component { 


  componentDidMount() {
    connection();
  }

  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}

export default App;
