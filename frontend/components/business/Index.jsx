var React = require('react'),
    BusinessIndexItem = require('./IndexItem');

var BusinessIndex = React.createClass({
  render: function(){

    var businesses = this.props.businesses.map(function(business){
      return <BusinessIndexItem key={business.id} business={business} />;
    });

    return(
      <ul className="business-index">
        {businesses}
      </ul>
    );
  }
});

module.exports = BusinessIndex;
