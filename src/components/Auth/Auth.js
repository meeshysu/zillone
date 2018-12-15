import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../helpers/data/authRequests';
import './Auth.scss';

class Auth extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.func,
  }

  // static means that it has no interaction with the function, or whatever it is, like an object.
  // propTypes is a reserved word; it has to be spelled the right way.
  authenticateUser = (e) => {
    e.preventDefault();
    // call authenticate method. write auth request.
    authRequests.authenticate().then(() => {
      this.props.isAuthenticated();
      // execute so (). what it is doing is looking at its properties
      // this function is getting passed into me. it executes it on App.js not right here?
    }).catch(err => console.error('there is an error with auth', err));
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-danger" onClick={this.authenticateUser}>Login</button>
      </div>
    );
  }
}

export default Auth;

// functions to display and manipulate dom go in between render and return
// outside the return will be put into a constructor. you do not do 'const'.
// () {} is a component. anything else needs the => i think.
