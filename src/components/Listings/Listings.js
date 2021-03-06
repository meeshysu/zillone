import React from 'react';
import PropTypes from 'prop-types';
import listingShape from '../../helpers/propz/listingShape';
import ListingItem from '../ListingItem/ListingItem';
import './Listings.scss';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
    deleteSingleListing: PropTypes.func,
    passListingToEdit: PropTypes.func,
  }

  render() {
    const { listings, deleteSingleListing, passListingToEdit } = this.props;
    const listingsItemComponents = listings.map(listing => (
      <ListingItem
        key={listing.id}
        listing={listing}
        deleteSingleListing={deleteSingleListing}
        passListingToEdit={passListingToEdit}
      />
    ));
    // we have no delete listing so we move along to listing item
    // want to map over prop listings everywhere so write this.props.
    // so if you want to loop over, just listings.map.
    // map loops through each item of an array and lets you make changes to it. returns a new array.
    return (
      <div className="listings col">
        <h2>Listings</h2>
        <ul>{listingsItemComponents}</ul>
      </div>
    );
  }
}

export default Listings;

// listing item has just the object.
// make a folder in our helpers where we can keep our shapes in so we don't have to copy and paste.
