var React = require('react'),
    BusinessIndexItem = require('./IndexItem'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    BusinessStore = require('../../stores/business'),
    FilterParamsStore = require('../../stores/filter_params'),
    ApiActions = require('../../actions/api_actions');

var BusinessIndex = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return({
            sortBy: "Top Rated",
            page: 0,
            businesses: BusinessStore.paginated()
          });
  },

  _filtersChanged: function(){
    this.setState({page: 0});
  },

  _pageChanged: function(){
    this.setState({businesses: BusinessStore.paginated()});
  },

  componentDidMount: function(){
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    this.pageListener = BusinessStore.addListener(this._pageChanged);
  },

  componentWillUnmount: function(){
    this.filterListener.remove();
    this.pageListener.remove();
    BusinessStore.resetPage();
  },

  pageUp: function(){
    ApiActions.receivePageChange(this.state.page + 1);
    this.setState({page: this.state.page + 1});
  },

  pageDown: function(){
    ApiActions.receivePageChange(this.state.page - 1);
    this.setState({page: this.state.page - 1});
  },

  resetPage: function(){
    ApiActions.receivePageChange(0);
    this.setState({page: 0});
  },

  // Sorting/Ordering is all done on the front end
  sortBusinesses: function(){
    var businesses = this.state.businesses;

    switch (this.state.sortBy) {
      case "Top Rated":
        businesses.sort(function(a,b) {
            return b.average_rating - a.average_rating;
        });
        break;
      case "Most Reviewed":
        businesses.sort(function(a,b) {
            return b.reviews.length - a.reviews.length;
        });
        break;
      case "Least Reviewed":
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
    return businesses;
  },

  render: function(){
    var businesses = this.sortBusinesses();

    businesses = this.state.businesses.map(function(business){
      return <BusinessIndexItem key={business.id} business={business} />;
    });

    var pageDownBtn = this.state.page > 0 ?
                    <button className="form-control purple-button"
                            id="business-prev"
                            onClick={this.pageDown}>Previous</button> : "";

    var pageUpBtn = this.state.page < BusinessStore.filteredCount() / 10 - 1?
                    <button className="form-control purple-button"
                            id="business-next"
                            onClick={this.pageUp}>Next</button> : "";

    // <label className='order-by'>
    //   Order by:
    //   <select name="sort" className="form-control"
    //     id="business-sort"
    //     valueLink={this.linkState('sortBy')}>
    //     <option value={"Top Rated"}>Rating: Top Rated</option>
    //     <option value={"Most Reviewed"}>Reviews: Most Reviews</option>
    //     <option value={"Least Reviewed"}>Reviews: Least Reviews</option>
    //     <option value={"A to Z"}>Alphabet: A to Z</option>
    //     <option value={"Z to A"}>Alphabet: Z to A</option>
    //   </select>
    // </label>
    return(
      <div>
        <h4>Search Results  <img className="yelp_btn" src="assets/yelp_powered_btn_light"/></h4>
        <ul className="business-index">
          {businesses}
          {pageDownBtn}
          {pageUpBtn}
        </ul>
      </div>
    );
  }
});

module.exports = BusinessIndex;
