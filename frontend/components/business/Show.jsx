var React = require('react');

var Business = React.createClass({
  getInitialState: function(){
    return {business: this.props.location.state.business}
  },

  render: function(){
    debugger;
    return(
      <div>
        <h2>{this.state.business.name}</h2>
      </div>
    );
  }
});

module.exports = Business;
