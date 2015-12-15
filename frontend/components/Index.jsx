var React = require('react'),
    BusinessIndex = require('./business/Index');

var Index = React.createClass({


  render: function(){
    return(
      <div className="bestOf">
        <BusinessIndex/>
      </div>
    );
  }
});

module.exports = Index;
