var React = require('react'),
    BusinessStore = require('../stores/business'),
    AuthStore = require('../stores/auth'),
    Searchbar = require('./Searchbar'),
    History = require('react-router').History;

var Navbar = React.createClass({
  mixins: [History],

  goToHome: function(e){
    e.preventDefault();
    this.history.pushState(null, "/", {});
  },

  signOut: function(e){
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/session',
      success: function(){
        window.location.href = '/';
      }
    });
  },

  render: function(){
    var logo = 'assets/HuskyNOM-white.png';
    return(
      <nav className="navbar nav" id="navbar">
        <div className="nav-container">
          <img src={logo} alt="logo" className="logo" onClick={this.goToHome}/>
          <h4 onClick={this.goToHome}>Home</h4>
          <h4>Write a Review</h4>
          <h4>Submit a Restaurant</h4>
          <Searchbar/>
          <h4 onClick={this.signOut} className="sign-out">Sign Out</h4>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;
