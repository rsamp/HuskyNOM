var React = require('react'),
    Map = require('../Map'),
    ReviewIndex = require('../review/Index');

var Business = React.createClass({
  // getInitialState: function(){
  //   return {business: this.props.location.state.business}
  // },

  render: function(){
    var business = this.props.location.state.business;
    var address = business.address;
    return(
      <div>
        <h2>{business.name}</h2>
        <Map businesses={[business]} mapClass="businessMap"/>
        <p>{address}</p>
        <h3>Reviews for {business.name}</h3>
        <ReviewIndex business={business}/>
      </div>
    );
  }
});

module.exports = Business;
