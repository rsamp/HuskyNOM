var React = require('react'),
    History = require('react-router').History;

var BusinessIndexItem = React.createClass({
  mixins: [History],

  handleClick: function(){
    var url = '/businesses/' + this.props.business.id;
    this.history.pushState({business: this.props.business}, url)
  },

  render: function(){

    return (
      <li>
        <h2 onClick={this.handleClick}>
          {this.props.business.name}
        </h2>
      </li>
    );
  }
});

module.exports = BusinessIndexItem;
