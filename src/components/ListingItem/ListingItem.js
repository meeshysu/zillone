import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../helpers/data/authRequests';
import listingShape from '../../helpers/propz/listingShape';
import formatPrice from '../../helpers/formatPrice';

import './ListingItem.scss';


class ListingItem extends React.Component {
  static propTypes = {
    listing: listingShape,
    deleteSingleListing: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleListing, listing } = this.props;
    deleteSingleListing(listing.id);
  }


  render() {
    const { listing } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (listing.uid === uid) {
        return (
          <div>
            <span className="col">
              <button className="btn btn-secondary" onClick={this.deleteEvent}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
          </div>
        );
      }
      return <span className="col-2"></span>;
    };
    // in order to delete we need to pass the item of the id.
    // we need to know which item we clicked on
    // thats the deleteEvent function that calls the delete listing id
    // the listing item knows about the listing that is in it
    // it exists on the state, this instance it exists on props bc we are passing listings thru it
    return (
      <li className="listing-item text-center">
        <span className="col-7">{listing.address}</span>
        <span className="col-3">{formatPrice(listing.price)}</span>
        {makeButtons()}
      </li>
    );
  }
}

export default ListingItem;

// because listing is attached to the shapes, we just need to import the shape.
// inside the shape it already has the PropTypes within. we don't need to import.
