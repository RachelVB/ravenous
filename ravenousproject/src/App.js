import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import Yelp from './../src/util/Yelp';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

    searchYelp(term,location,sortBy) {
      Yelp.searchYelp(term,location,sortBy).then((businesses) => {
        this.setState({ businesses: businesses });
      });
    }

  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/> 
         {/* Below, in our BusinessList component, this is how we create the propName. 
        You can see that we've attached our 'businesses' array to this prop name. 
        In the future, we will call this propname by {this.prop.busiArray} */}
      <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
