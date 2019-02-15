import React from 'react';
import './SearchBar.css';


const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    /* This Object.keys return method, allows us to start our iteration by accessing the keys in our object.
    We complete the iteration by using the .map() methond at the end. */
    return Object.keys(sortByOptions).map(sortByOption => {
      /* This let variable allows us to store the results in this variable when we cann the keys in our object. */
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
      <li key={sortByOptionValue}>{sortByOption}</li>
        )
    });
  }
  render() {
    return (
      <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {/* .renderSortByOptions() */}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a href="Search" >Let's Go</a>
  </div>
  </div>
    )
  }
}

export default SearchBar;