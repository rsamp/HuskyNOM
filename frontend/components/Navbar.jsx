var React = require('react'),
    BusinessStore = require('../stores/business'),
    AuthStore = require('../stores/auth'),
    Searchbar = require('./Searchbar');

var Navbar = React.createClass({
  getInitialState: function(){
    return {businesses: BusinessStore.all(), user: AuthStore.currentUser()}
  },

  render: function(){
    var img = 'assets/images/HuskyNOM-logo.png';
    return(
      <nav>
        <h1>HuskyNOM</h1>
        <h3>Home</h3>
        <h3>Write a Review</h3>
        <h3>Submit a Business</h3>
        <Searchbar/>
      </nav>
    );
  }
});

module.exports = Navbar;
