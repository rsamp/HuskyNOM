var React = require('react'),
    BusinessStore = require('../../stores/business'),
    ApiUtil = require('../../util/api_util'),
    BusinessIndexItem = require('./IndexItem');

var BusinessIndex = React.createClass({
  getInitialState: function(){
    return {businesses: BusinessStore.all()};
  },

  _onChange: function(){
    this.setState({businesses: BusinessStore.all()});
  },

  componentDidMount: function(){
    this.businessListener = BusinessStore.addListener(this._onChange);
    ApiUtil.fetchBusinesses();
  },

  componentWillUnmount: function(){
    this.businessListener.remove();
  },

  render: function(){
    var businesses = this.state.businesses.map(function(business){
      return <BusinessIndexItem key={business.id} business={business} />
    });

    return(
      <ul>
        {businesses}
      </ul>
    );
  }
})

module.exports = BusinessIndex
