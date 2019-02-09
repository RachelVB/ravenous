import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
    <Business />
    <Business />
    <Business />
    <Business />
    <Business />
    <Business />
      </div>
    )
  }
}

/* After creating a component, we must always export it. */
export default BusinessList;