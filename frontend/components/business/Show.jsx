var React = require('react'),
    Map = require('./Map'),
    ReviewIndex = require('../review/Index'),
    History = require('react-router').History,
    ImageIndex = require('../image/Index'),
    Rating = require('react-rating'),
    BusinessStore = require('../../stores/business'),
    ReviewStore = require('../../stores/review'),
    ApiUtil = require('../../util/api_util');

var Business = React.createClass({
  mixins: [History],

  getInitialState: function(){
    var business = BusinessStore.find(parseInt(this.props.params.id));
    return({business: business});
  },

  _reviewsChanged: function(){
    this.setState({average_rating: this.state.business.average_rating});
  },

  _businessChanged: function(){
    var business = BusinessStore.find(parseInt(this.props.params.id));
    this.setState({business: business});
  },

  componentDidMount: function () {
    ApiUtil.fetchBusiness(this.props.params.id);
    this.reviewListener = ReviewStore.addListener(this._reviewsChanged);
    this.businessListener = BusinessStore.addListener(this._businessChanged);
  },

  componentWillUnmount: function () {
    this.reviewListener.remove();
    this.businessListener.remove();
  },

  componentWillReceiveProps: function(newProps) {
    this._businessChanged();
  },

  render: function() {
    if (this.state.business) {
      return this.renderBusiness();
    } else {
      return <div/>;
    }
  },

  renderBusiness: function(){
    var business = this.state.business;
    var address = business.address;
    var rating = business.average_rating ?
                  <Rating full="glyphicon glyphicon-star large"
                          empty="glyphicon glyphicon-star-empty large"
                          initialRate={business.average_rating}
                          readonly={true}
                          fractions={6} /> :
                          <h4 className="no-reviews">No reviews</h4>;

    return(
      <div>
        <h2>{business.name}</h2>
        {rating}
        <ImageIndex business={business} images={business.images}/>
        <Map businesses={[business]} mapClass="businessMap"/>
        <p>{address}</p>
        <ReviewIndex business={business} reviews={business.reviews} hiddenForm={true}/>
      </div>
    );
  }
});

module.exports = Business;
