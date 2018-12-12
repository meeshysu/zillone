import React from 'react';
import authRequests from '../../helpers/data/authRequests';
import './Auth.scss';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    // call authenticate method. write auth request.
    authRequests.authenticate().then(() => {
      // do something here in a bit
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
