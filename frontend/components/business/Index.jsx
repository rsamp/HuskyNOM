var React = require('react'),
    BusinessIndexItem = require('./IndexItem'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    BusinessStore = require('../../stores/business');

var BusinessIndex = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return({sortBy: "Top Rated", page: 0});
  },

  pageUp: function(){
    this.setState({page: this.state.page + 1});
  },

  pageDown: function(){
    this.setState({page: this.state.page - 1});
  },

  render: function(){
    var businesses = this.props.businesses.slice(0);

    switch (this.state.sortBy) {
      case "Top Rated":
        businesses.sort(function(a,b) {
            return b.average_rating - a.average_rating;
        });
        break;
      case "Most Reviews":
        businesses.sort(function(a,b) {
            return b.reviews.length - a.reviews.length;
        });
        break;
      case "Least Reviews":
        businesses.sort(function(a,b) {
            return a.reviews.length - b.reviews.length;
        });
        break;
      case "A to Z":
        businesses.sort(function(a,b) {
          var x = a.name.toLowerCase();
          var y = b.name.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        break;
      case "Z to A":
        businesses.sort(function(a,b) {
          var x = b.name.toLowerCase();
          var y = a.name.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        break;
    }

    var groupsOfTenBusinesses = [];

    while (businesses.length > 0){
      groupsOfTenBusinesses.push(businesses.splice(0, 10));
    }

    businesses = groupsOfTenBusinesses[this.state.page].map(function(business){
      return <BusinessIndexItem key={business.id} business={business} />;
    });

    var pageDownBtn = this.state.page > 0 ?
                    <button onClick={this.pageDown}>Previous</button> : "";

    var pageUpBtn = this.state.page < groupsOfTenBusinesses.length - 1?
                    <button onClick={this.pageUp}>Next</button> : "";

    return(
      <div>
        <label>
          Sort by:
          <select name="sort" className="form-control" valueLink={this.linkState('sortBy')}>
            <option value={"Top Rated"}>Top Rated</option>
            <option value={"Most Reviews"}>Most Reviews</option>
            <option value={"Least Reviews"}>Least Reviews</option>
            <option value={"A to Z"}>A to Z</option>
            <option value={"Z to A"}>Z to A</option>
          </select>
        </label>
        <ul className="business-index">
          {businesses}
        </ul>
        {pageDownBtn}
        {pageUpBtn}
      </div>
    );
  }
});

module.exports = BusinessIndex;
