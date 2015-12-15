var React = require('react');

var BusinessIndexItem = React.createClass({


  render: function(){


    return (
      <li>
        <h2>{this.props.business.name}</h2>
      </li>
    );
  }
});

module.exports = BusinessIndexItem;
