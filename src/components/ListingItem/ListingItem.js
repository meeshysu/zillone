import React from 'react';
import listingShape from '../../helpers/propz/listingShape';
import formatPrice from '../../helpers/formatPrice';

import './ListingItem.scss';
import authRequests from '../../helpers/data/authRequests';

class ListingItem extends React.Component {
  static propTypes = {
    listing: listingShape,
  }

  render() {
    const { listing } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (listing.uid === uid) {
        return (
          <div>
            <span className="col"><button className="btn btn-secondary fas fa-trash-alt"></button></span>
          </div>
        );
      }
      return <span className="col-2"></span>;
    };

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
