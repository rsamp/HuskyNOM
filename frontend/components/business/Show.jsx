var React = require('react'),
    Map = require('./Map'),
    ReviewIndex = require('../review/Index'),
    History = require('react-router').History,
    ImageIndex = require('../image/Index');

var Business = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return {business: this.props.location.state.business};
  },

  render: function(){
    var business = this.state.business;
    var address = business.address;
    return(
      <div>
        <h2>{business.name}</h2>
        <ImageIndex businessId={business.id}/>
        <Map businesses={[business]} mapClass="businessMap"/>
        <p>{address}</p>
        <ReviewIndex business={business}/>
      </div>
    );
  }
});

module.exports = Business;
