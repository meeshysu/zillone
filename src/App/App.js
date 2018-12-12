import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import './App.scss';

// component is also a class. my class 'app' gets all the info from component.
// where you have variables, you put {} around. look at logo for i.e.
// you can use javascript in jsx.
// put everything in a container bc you cannot have siblings in a div.
class App extends Component { // you must have a render! you have to have a return.
  // the return is basically what html that you want. it's written in jsx, the language of html?
  render() {
    console.log(this); // this refers to the actual class itself
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button className="btn btn-danger">Help!</button>
          <Button
            tag="a"
            color="primary"
            size="large"
            href="google.com"
            target="_blank"
          >
            Visit My Homeland
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
