import React from 'react';
import './ListingForm.scss';
import PropTypes from 'prop-types';
import authRequests from '../../helpers/data/authRequests';
import listingRequests from '../../helpers/data/listingRequests';

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
  static propTypes = {
    onSubmit: PropTypes.func,
    isEditing: PropTypes.bool,
    editId: PropTypes.string,
  }

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

  formSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props; // bc you're passing it.
    const myListing = { ...this.state.newListing };
    myListing.uid = authRequests.getCurrentUid();
    onSubmit(myListing);
    this.setState({ newListing: defaultListing });
  }

  componentDidUpdate(prevProps) {
    const { isEditing, editId } = this.props;
    if (prevProps !== this.props && isEditing) {
      listingRequests.getSingleListing(editId)
        .then((listing) => {
          this.setState({ newListing: listing.data });
        })
        .catch((error) => {
          console.log('error in componentDidUpdate', error);
        });
    }
  }
  // runs when pop and state changes.
  // if new props is not equal to now props and isEdited
  // listing.data to get that one listing back

  render() {
    const { newListing } = this.state;
    const { isEditing } = this.props;
    const title = () => {
      if (isEditing) {
        return <h2>Edit Listing:</h2>;
      }
      return <h2>Add New Listing:</h2>;
    };
    return (
      <div className="ListingForm col">
        {title()}
        <form onSubmit={this.formSubmit}>
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
