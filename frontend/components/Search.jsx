var React = require('react'),
    BusinessStore = require('../stores/business'),
    FilterParamsStore = require('../stores/filter_params'),
    ApiUtil = require('../util/api_util'),
    Filters = require('./Filters'),
    BusinessIndex = require('./business/Index'),
    Map = require('./Map');

function _fetchBusinesses(){
  return BusinessStore.filtered();
}

function _fetchFilters(){
  return FilterParamsStore.params();
}

var Search = React.createClass({
  getInitialState: function(){
    return {businesses: [], filterParams: _fetchFilters()};
  },

  _businessesChanged: function(){
    this.setState({businesses: _fetchBusinesses()});
  },

  _filtersChanged: function(){
    this.setState({filterParams: _fetchFilters()});
    ApiUtil.fetchBusinesses();
  },

  componentWillMount: function(){
    this.loadState = "Map is loading...";
    setTimeout(function(){
      this.loadState = "No results";
    }.bind(this), 3000);
  },

  componentDidMount: function(){
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    this.businessListener = BusinessStore.addListener(this._businessesChanged);
  },

  componentWillUnmount: function(){
    this.businessListener.remove();
    this.filterListener.remove();
  },

  render: function(){
    var businesses = this.state.businesses;
    var index = (businesses.length === 0) ? this.loadState : <BusinessIndex count={businesses.length} businesses={businesses}/>;
    return(
      <div>
        <Map mapClass={"indexMap"} businesses={businesses}/>
        <h3>Businesses within map bounds</h3>
        <Filters businesses={businesses} filterParams={this.state.filterParams}/>
        {index}
      </div>
    );
  }
});

module.exports = Search;
