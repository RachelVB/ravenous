import React from 'react';
import './SearchBar.css';


const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    }

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy) {
      return 'active';
    } 
      return '';
  };
  
  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event) {
    // This 'setstate' allows us to enter and provide an output to the search funciton.
    this.setState({term: event.target.value})
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value})
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
    event.preventDefault();
  }

  renderSortByOptions() {
    /* This Object.keys return method, allows us to start our iteration by accessing the keys in our object.
    We complete the iteration by using the .map() methond at the end. */
    return Object.keys(sortByOptions).map(sortByOption => {
      /* This let variable allows us to store the results in this variable when we can the keys in our object. */
      let sortByOptionValue = sortByOptions[sortByOption];
      /* This return statement allows us to search by either one of our 3 sort options. 
      Make sure you use 'this.' in front of you attributes that hold your methods. */
      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
    });
  }

  render() {
    return (
      <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
  {/* If there are issues PLEASE CHECK THESE ONCHANGE ATTRIBUTES! */}
    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
    <input placeholder="Where?" onChange={this.handleLocationChange} />
  </div>
  <div className="SearchBar-submit">
    <a href="Search" onClick={this.handleSearch} >Let's Go</a>
  </div>
  </div>
    );
  }
}

export default SearchBar;