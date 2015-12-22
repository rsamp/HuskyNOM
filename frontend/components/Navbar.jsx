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

  restaurantForm: function(e){
    e.preventDefault();
    this.history.pushState(null, 'businesses/new', {});
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
      <nav className="nav navbar-fixed-top" id="navbar">
        <div className="nav-container">
          <img src={logo} alt="logo" className="logo" onClick={this.goToHome}/>
          <h4 onClick={this.goToHome}>Home</h4>
          <h4 onClick={this.restaurantForm}>Submit a Restaurant</h4>
          <Searchbar/>
          <h4 className="sign-out">{window.CURRENT_USER.username}</h4>
          <h4 onClick={this.signOut} className="sign-out">Sign Out</h4>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;
