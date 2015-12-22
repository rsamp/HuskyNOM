var React = require('react'),
    Map = require('./Map'),
    ReviewIndex = require('../review/Index'),
    History = require('react-router').History,
    ImageIndex = require('../image/Index'),
    Rating = require('react-rating'),
    ApiUtil = require('../../util/api_util'),
    BusinessStore = require('../../stores/business'),
    ReviewStore = require('../../stores/review');

var Business = React.createClass({
  mixins: [History],

  getInitialState: function(){
    // set business to store
    var business = this.props.location.state.business;
    return({business: BusinessStore.find(business.id)});
    // return {business: null, average_rating: business.average_rating};
  },

  _onChange: function(){
    debugger;
    this.setState({business: BusinessStore.find(this.state.business.id)});
  },

  componentDidMount: function () {
    // this.setState({business: ApiUtil.fetchBusiness(this.props.location.state.business.id)});
    //fetch business from API
    //add listener to store
    this.reviewListener = ReviewStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.reviewListener.remove();
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({business: BusinessStore.find(parseInt(newProps.params.id))});
  },

  render: function(){
    var business = this.state.business;
    var address = business.address;
    var rating = business.average_rating ?
                  <Rating full="glyphicon glyphicon-star large"
                          empty="glyphicon glyphicon-star-empty large"
                          initialRate={business.average_rating}
                          readonly={true}
                          fractions={6} /> :
                  <h4>No reviews</h4>;

    return(
      <div>
        <h2>{business.name}</h2>
        {rating}
        <ImageIndex businessId={business.id}/>
        <Map businesses={[business]} mapClass="businessMap"/>
        <p>{address}</p>
        <ReviewIndex business={business} hiddenForm={true}/>
      </div>
    );
  }
});

module.exports = Business;
