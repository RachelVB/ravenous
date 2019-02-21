import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
    {
      this.props.businesses.map(function (business) {
      return <Business key={business.id} business={business} />
      /* Notice how this return statment contains a prop that pulls from our main business component. */
    })
    }
      </div>
    )
  }
}

/* After creating a component, we must always export it. */
export default BusinessList;