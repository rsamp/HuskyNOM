var React = require('react');

var Searchbar = React.createClass({

  render: function(){
    return(
      <form id="searchbar">
        <input type="text"/>
      </form>
    );
  }
});

module.exports = Searchbar;
