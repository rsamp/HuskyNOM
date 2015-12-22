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
    var business = this.props.location.state.business;
    return({business: business, average_rating: business.average_rating});
    // return({business: BusinessStore.find(business.id), average_rating: business.average_rating});
    // may not need average_rating state
  },

  _reviewsChanged: function(){
    // debugger;
    this.setState({average_rating: this.state.business.average_rating});
  },

  componentDidMount: function () {
    this.reviewListener = ReviewStore.addListener(this._reviewsChanged);
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
    var rating = this.state.average_rating ?
                  <Rating full="glyphicon glyphicon-star large"
                          empty="glyphicon glyphicon-star-empty large"
                          initialRate={this.state.average_rating}
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
        <ReviewIndex business={business} hiddenForm={true} reviewsChanged={this._reviewsChanged}/>
      </div>
    );
  }
});

module.exports = Business;
