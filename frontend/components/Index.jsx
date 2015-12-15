var React = require('react'),
    BusinessIndex = require('./business/Index'),
    BusinessStore = require('../stores/business'),
    Map = require('./Map');

var Index = React.createClass({
  getInitialState: function(){
    return {businesses: BusinessStore.all()}
  },

  render: function(){
    return(
      <div className="searchResults">
        <BusinessIndex/>
        <Map businesses={this.state.businesses}/>
      </div>
    );
  }
});

module.exports = Index;
