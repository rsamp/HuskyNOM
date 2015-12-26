var React = require('react'),
    BusinessStore = require('../stores/business'),
    AuthStore = require('../stores/auth'),
    Searchbar = require('./Searchbar'),
    History = require('react-router').History,
    DropdownButton = require('react-bootstrap').DropdownButton,
    MenuItem = require('react-bootstrap').MenuItem;

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
          <h5 onClick={this.signOut} className="sign-out">Sign Out</h5>
        </div>
      </nav>
    );
  }
});

// <DropdownButton bsStyle="link" title={window.CURRENT_USER.username} id="user-dropdown">
//   <MenuItem className="sign-out">Sign Out</MenuItem>
// </DropdownButton>
// <h4 className="sign-out">Hello {window.CURRENT_USER.username}</h4>
module.exports = Navbar;
