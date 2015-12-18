var React = require('react'),
    BusinessStore = require('../stores/business'),
    AuthStore = require('../stores/auth'),
    Searchbar = require('./Searchbar')
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
        debugger;
        // window.location = '/'
      }
    })
  },

  render: function(){
    var img = 'assets/HuskyNOM.png';
    return(
      <nav className="navbar navbar-default">
        <div className="nav-container">
          <a onClick={this.goToHome}><img src={img} alt="logo" className="logo"/></a>
          <a onClick={this.goToHome}><h5>Home</h5></a>
          <h5>Write a Review</h5>
          <h5>Submit a Business</h5>
          <Searchbar/>
          <a onClick={this.signOut} className="sign-out"><h5>Sign Out</h5></a>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;
