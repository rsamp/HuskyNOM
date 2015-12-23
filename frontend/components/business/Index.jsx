var React = require('react'),
    BusinessIndexItem = require('./IndexItem');

var BusinessIndex = React.createClass({
  render: function(){
    var businesses = this.props.businesses.slice(0);

    //sorts by highest review
    // businesses.sort(function(a,b) {
    //     return b.average_rating - a.average_rating;
    // });

    //sorts by number of reviews
    // businesses.sort(function(a,b) {
    //     return b.reviews.length - a.reviews.length;
    // });

    //sorts by alphabet
    businesses.sort(function(a,b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });

    businesses = businesses.map(function(business){
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
