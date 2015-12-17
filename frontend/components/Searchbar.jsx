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
    this.setState({businesses: BusinessStore.all()})
  },

  componentWillMount: function(){
    this.searchListener = BusinessStore.addListener(this._onChange)
    ApiUtil.fetchAllBusinesses();
  },

  componentWillUnmount: function(){
    this.searchListener.remove();
  },

  handleInput: function(e){
    this.setState({inputVal: e.currentTarget.value})
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

  selectBusiness: function(e){
    e.preventDefault();
    var id = e.currentTarget.id;
    var url = '/businesses/' + id;
    debugger;
    this.history.pushState(null, url)
  },

  render: function(){
    var results = this.matches();
    results = results.map(function(result, i){
      return <li key={i} onClick={this.selectBusiness} id={result.id}>{result.name}</li>
    }.bind(this));
    return(
      <form id="searchbar">
        <input type="text" onChange={this.handleInput} value={this.state.inputVal}/>
        <ul>
          {results}
        </ul>
      </form>
    );
  }
});

module.exports = Searchbar;
