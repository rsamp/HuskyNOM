var React = require('react'),
    BusinessStore = require('../stores/business'),
    ApiUtil = require('../util/api_util'),
    History = require('react-router').History;

var Searchbar = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return {inputVal: "", businesses: []};
  },

  _onChange: function(){
    this.setState({businesses: BusinessStore.all()});
  },

  componentWillMount: function(){
    this.searchListener = BusinessStore.addListener(this._onChange);
    ApiUtil.fetchAllBusinesses();
  },

  componentWillUnmount: function(){
    this.searchListener.remove();
  },

  handleInput: function(e){
    this.setState({inputVal: e.currentTarget.value});
  },

  matches: function(){
    var matches = [];
    if(this.state.inputVal.length === 0){
      return [];
    }

    this.state.businesses.forEach(function(business){
      var sub = business.name.slice(0, this.state.inputVal.length);
      if(sub.toLowerCase() === this.state.inputVal.toLowerCase()){
        matches.push(business);
      }
    }.bind(this));

    if (matches.length === 0){
      matches.push("No matches");
    }

    return matches;
  },

  selectBusiness: function(business, e){
    e.preventDefault();
    var url = '/businesses/' + business.id;
    this.history.pushState({business: business}, url);
  },

  render: function(){
    var businesses = this.matches();
    businesses = businesses.map(function(business, i){
      return <a className="list-group-item searchbar-list" key={i} onClick={this.selectBusiness.bind(null, business)}>{business.name}</a>;
    }.bind(this));

    return(
      <form id="searchbar" className="navbar-form">
        <input type="text" className="form-control" onChange={this.handleInput} value={this.state.inputVal}/>
        <div className="list-group">
          {businesses}
        </div>
      </form>
    );
  }
});

module.exports = Searchbar;
