var React = require('react'),
    BusinessStore = require('../stores/business'),
    FilterParamsStore = require('../stores/filter_params'),
    ApiUtil = require('../util/api_util'),
    Filters = require('./Filters'),
    BusinessIndex = require('./business/Index'),
    Map = require('./Map');

function _fetchBusinesses(){
  return BusinessStore.all();
}

function _fetchFilters(){
  return FilterParamsStore.params();
}

var Search = React.createClass({
  getInitialState: function(){
    return {businesses: _fetchBusinesses(), filterParams: _fetchFilters()}
  },

  _businessesChanged: function(){
    this.setState({businesses: _fetchBusinesses()});
  },

  _filtersChanged: function(){
    var newParams = _fetchFilters();
    this.setState({filterParams: newParams});
    ApiUtil.fetchBusinesses();
  },

  componentDidMount: function(){
    this.businessListener = BusinessStore.addListener(this._businessesChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    ApiUtil.fetchBusinesses();
  },

  componentWillUnmount: function(){
    this.businessListener.remove();
    this.filterListener.remove();
  },

  render: function(){
    return(
      <div>
        <Map businesses={this.state.businesses}/>
        <Filters businesses={this.state.businesses} filterParams={this.state.filterParams}/>
        <BusinessIndex businesses={this.state.businesses}/>
      </div>
    );
  }
});

module.exports = Search;
