import React from 'react';
import './ListingForm.scss';

const defaultListing = {
  address: '',
  squareFootage: 0,
  price: 0,
  numBeds: 0,
  numBaths: 0,
  heating: '',
  cooling: '',
  imageUrl: '',
  uid: '',
};

class ListingForm extends React.Component {
  state = {
    newListing: defaultListing,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempListing = { ...this.state.newListing };
    tempListing[name] = e.target.value;
    this.setState({ newListing: tempListing });
  }
  // name: passing address. bracket notation bc it's a string.

  // formFieldNumberState = (name, e) => {
  //   const tempListing = { ...this.state.newListing };
  //   tempListing[name] = e.target.value * 1;
  //   this.setState({ newListing: tempListing });
  // }

  addressChange = e => this.formFieldStringState('address', e);

  // SPREAD OPERATOR:
  // new listing is an object, it's taking the keys in the object
  // and writing it out and putting it into another object
  // can do the same with an array. like...
  // const a = [1,2,3]
  // const b = [2,4,4]
  // const big = [...this.a, ...this.b];
  // will return [1,2,3,2,4,4]

  addressChange = (e) => {
    this.formFieldStringState('address', e);
  }
  // if you just write the e, you can grab the value of the function instead

  render() {
    const { newListing } = this.state;
    return (
      <div className="ListingForm col">
        <h2>Add New Listing</h2>
        <form>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
            type="text"
            className="form-control"
            id="address"
            aria-describedby="addressHelp"
            placeholder="1234 Main Street Nashville, TN 37209"
            value={newListing.address}
            onChange={this.addressChange}
            />
          </div>
          <button className="btn btn-secondary">Save Listing</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
