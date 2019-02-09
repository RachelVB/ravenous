import React from 'react';
import './business.css';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

class Business extends React.Component {
  render() {
    return(
    <div className="Business">
    <div className="image-container">
      <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
    </div>
    <h2>{business.thisName}</h2>
    <div className="Business-information">
      <div className="Business-address">
        <p>{business.thisAddress}</p>
        <p>{business.thisCity}</p>
        <p>{business.thisState}{business.thisZipCode}</p>
      </div>
      <div className="Business-reviews">
        <h3>{business.thisCategory}</h3>
        <h3 className="rating">{business.thisRating} Stars</h3>
        <p>{business.thisReviewCount} reviews</p>
      </div>
    </div>
  </div>
  );
  }
}

export default Business;