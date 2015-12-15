var React = require('react'),
    BusinessIndex = require('./business/Index');

var Index = React.createClass({


  render: function(){
    return(
      <div className="searchResults">
        <BusinessIndex/>
      </div>
    );
  }
});

module.exports = Index;
