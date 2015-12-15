var React = require('react'),
    BusinessIndex = require('./business/Index');

var Index = React.createClass({


  render: function(){
    return(
      <BusinessIndex/>
    );
  }
});

module.exports = Index;
