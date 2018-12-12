import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';
// import logo from './logo.svg';
import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import Listings from '../components/Listings/Listings';
import './App.scss';

// component is also a class. my class 'app' gets all the info from component.
// where you have variables, you put {} around. look at logo for i.e.
// you can use javascript in jsx.
// put everything in a container bc you cannot have siblings in a div.
// you must have a render! you have to have a return.
// the return is basically what html that you want. it's written in jsx, the language of html?

// FIREBASE CALL
class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
  }

  isAuthenticated = () => {
    // whenever modifying state you need to use set state
    // this bc it is defining the component. set state is a function so execute it.
    this.setState({ authed: true });
    // when it is called it will change your state. will change auth.
    // to add more than one key, just separate them with a comma. just a reg object.
    // now we have to pass it to auth. <Auth />
    // passing in a reference {this.isAuthenticated} below.
  };

  render() {
    if (!this.state.authed) {
      return (
        <div className="App">
          <Auth isAuthenticated={this.isAuthenticated}/>
        </div>
      );
    }
    return (
      <div className="App">
        <Listings />
      </div>
    );
  }
}

export default App;
