var React = require('react'),
    BusinessStore = require('../../stores/business'),
    ApiUtil = require('../../util/api_util'),
    BusinessIndexItem = require('./IndexItem');

var BusinessIndex = React.createClass({
  render: function(){

    var businesses = this.props.businesses.map(function(business){
      return <BusinessIndexItem key={business.id} business={business} />
    });

    // businesses = businesses.length === 0 ? "No results" : businesses;
    // debugger;

    return(
      <ul>
        {businesses}
      </ul>
    );
  }
})

module.exports = BusinessIndex
