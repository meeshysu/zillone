import React from 'react';
import PropTypes from 'prop-types';
import listingShape from '../../helpers/propz/listingShape';
import './Listings.scss';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
  }

  render() {
    return (
    <div className="listings col">
    <h2>Listings</h2>
    </div>
    );
  }
}

export default Listings;

// listing item has just the object.
// make a folder in our helpers where we can keep our shapes in so we don't have to copy and paste.
