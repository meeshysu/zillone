import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import Listings from '../components/Listings/Listings';
import Buildings from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import listingRequests from '../helpers/data/listingRequests';
import authRequest from '../helpers/data/authRequests';
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
    listings: [],
    isEditing: false, // on page load tis false cause you ain't clicked nada yet
    editId: '-1', // bc you will never have a -1 id
  }

  componentDidMount() {
    listingRequests.getRequest()
      .then((listings) => {
        this.setState({ listings });
      })
      .catch(err => console.error('error with listing GET', err));

    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
    // this is a react thing. it is adding a listener.
    // every time this fires, it is going to return the user from the auth state change.
    // and if it exists, it will set the auth to true. if not false.
    // when the page reloads it's going to fire it off.
  }

  componentWillUnmount() {
    this.removeListener();
  }

  // react method so no arrow.

  isAuthenticated = () => {
    // whenever modifying state you need to use set state
    // this bc it is defining the component. set state is a function so execute it.
    this.setState({ authed: true });
    // when it is called it will change your state. will change auth.
    // to add more than one key, just separate them with a comma. just a reg object.
    // now we have to pass it to auth. <Auth />
    // passing in a reference {this.isAuthenticated} below.
  };


  deleteOne = (listingId) => {
    listingRequests.deleteListing(listingId)
      .then(() => {
        listingRequests.getRequest()
          .then((listings) => {
            this.setState({ listings });
          });
      })
      .catch((err) => {
        console.error('error with delete singe', err);
      });
  }
  // once we are done deleting, we need to rerender
  // need to call this function where the delete button lives
  // we call listing component thru the listings, so go there

  formSubmitEvent = (newListing) => {
    const { isEditing, editId } = this.state;
    if (isEditing) {
      listingRequests.putRequest(editId, newListing)
        .then(() => {
          listingRequests.getRequest()
            .then((listings) => {
              this.setState({ listings, isEditing: false, editId: '-1' });
            });
        })
        .catch(error => console.error('error on formSubmitEvent', error));
    } else {
      listingRequests.postRequest(newListing)
        .then(() => {
          listingRequests.getRequest()
            .then((listings) => {
              this.setState({ listings });
            });
        })
        .catch(error => console.error('error on formSubmitEvent', error));
    }
  }

  passListingToEdit = listingId => this.setState({ isEditing: true, editId: listingId });

  render() {
    const {
      authed,
      listings,
      isEditing,
      editId,
    } = this.state;

    const logoutClickEvent = () => {
      authRequest.logoutUser();
      this.setState({ authed: false });
      // kills the cookies in your local storage. hides the logout, etc.
      // put it here bc it is a click event. reserve stuff above for things
      // that do direct crud methods.
    };

    if (!this.state.authed) {
      return (
        <div className="App">
          <MyNavbar isAuthed={authed} logoutClickEvent={logoutClickEvent} />
          <div className="row">
            <Auth isAuthenticated={this.isAuthenticated} />
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <MyNavbar isAuthed={authed} logoutClickEvent={logoutClickEvent} />
        <div className="row">
          <Listings
            listings={listings}
            deleteSingleListing={this.deleteOne}
            passListingToEdit={this.passListingToEdit}
          />
          <Buildings />
        </div>
        <div className="row">
          <ListingForm onSubmit={this.formSubmitEvent} isEditing={isEditing} editId={editId} />
        </div>
      </div>
    );
  }
}

export default App;

// this.state.authed to call out what it is, not set it.
// setState rerenders the components and you need this.state to update it.
// state tells what the application needs to rerender.
// state holds all the data for your applications. state is a variable.
// the entire interface depends on listings.
// listings has an empty array so that we can pass back to components.
