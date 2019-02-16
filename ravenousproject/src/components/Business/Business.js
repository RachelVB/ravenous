import React from 'react';
import './business.css';

/* This component will show HOW it will display on the webpage. 
This compenent only has a impact on what is contained inside the business. 
Other compenents will grab THIS compenent and use it accordingly. */
class Business extends React.Component {
  render() {
    return(
    <div className="Business">
    <div className="image-container">
      <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
    </div>
    <h2>{this.props.business.thisName}</h2>
    <div className="Business-information">
      <div className="Business-address">
        <p>{this.props.business.thisAddress}</p>
        <p>{this.props.business.thisCity}</p>
        <p>{this.props.business.thisState}{this.props.business.thisZipCode}</p>
      </div>
      <div className="Business-reviews">
        <h3>{this.props.business.thisCategory}</h3>
        <h3 className="rating">{this.props.business.thisRating} Stars</h3>
        <p>{this.props.business.thisReviewCount} reviews</p>
      </div>
    </div>
  </div>
  );
  }
}

export default Business;