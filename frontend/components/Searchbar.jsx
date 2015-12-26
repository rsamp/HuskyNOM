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

  enterSearchbox: function(){
    this.setState({businesses: BusinessStore.all()});
    this.inSearchbox = true;
  },

  leaveSearchbox: function(){
    this.setState({businesses: []});
    this.inSearchbox = false;
  },

  matches: function(){
    var matches = [];
    if(this.state.inputVal.length === 0){
      return [];
    }

    this.state.businesses.forEach(function(business){
      var sub;
      for (var i = 0; i < business.name.length; i++){
        sub = business.name.slice(i, i + this.state.inputVal.length);
        if(sub.toLowerCase() === this.state.inputVal.toLowerCase() &&
              matches.indexOf(business) === -1){
          matches.push(business);
        }
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
    this.setState({inputVal: ""});
  },

  render: function(){
    var businesses = "";
    if (this.inSearchbox) {
      businesses = this.matches();
      businesses = businesses.map(function(business, i){
        if (business === "No matches"){
          return <li className="list-group-item no-matches"
                     key={i}>No matches</li>;
        } else {
          return <a className="list-group-item searchbar-list"
                    key={i}
                    onMouseDown={this.selectBusiness.bind(null, business)}>
                    {business.name}</a>;
        }
      }.bind(this));
    }

    return(
      <form id="searchbar"
            className="navbar-form"
            onFocus={this.enterSearchbox}
            onBlur={this.leaveSearchbox}>
        <input type="text"
               className="form-control"
               id="searchbox"
               onChange={this.handleInput}
               value={this.state.inputVal}
               placeholder="Search"/>
        <div className="list-group">
          {businesses}
        </div>
      </form>
    );
  }
});

module.exports = Searchbar;
