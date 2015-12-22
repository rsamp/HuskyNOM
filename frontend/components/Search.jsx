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

function _fetchTen(startIdx){
  return BusinessStore.fetchTen(startIdx);
}

function _fetchFilters(){
  return FilterParamsStore.params();
}

var Search = React.createClass({
  getInitialState: function(){
    return {businesses: [],
            filterParams: _fetchFilters(),
            nextTenStartIdx: 0,
            // prevTenStartIdx: -10
          };
  },

  _businessesChanged: function(){
    this.setState({businesses: _fetchBusinesses()});
    this.setState({businesses: _fetchTen(0)});
    this.setState({nextTenStartIdx: 10});
    // this.setState({prevTenStartIdx: this.state.prevTenStartIdx + 10});
  },

  _filtersChanged: function(){
    this.setState({filterParams: _fetchFilters()});
    ApiUtil.fetchBusinesses();
  },

  nextTen: function(){
    this.setState({businesses: _fetchTen(this.state.nextTenStartIdx)});
  },
  //
  // prevTen: function(){
  //   this.setState({businesses: _fetchTen(this.state.prevTenStartIdx)});
  // },

  componentWillMount: function(){
    this.loadState = "Map is loading...";
    setTimeout(function(){
      this.loadState = "No results";
    }.bind(this), 3000);
  },

  initialFetch: function(){
    ApiUtil.fetchBusinesses();
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
    var index = (businesses.length === 0) ? this.loadState :
            <BusinessIndex count={businesses.length} businesses={businesses}/>;
    return(
      <div>
        <Map mapClass={"indexMap"} initialFetch={this.initialFetch} businesses={businesses}/>
        <h3>Restaurants within map bounds</h3>
        <Filters businesses={businesses}
                 filterParams={this.state.filterParams}/>
        {index}
        <button onClick={this.nextTen}>Next 10</button>
      </div>
    );
  }
});

module.exports = Search;

// <button onClick={this.prevTen}>Previous 10</button>
