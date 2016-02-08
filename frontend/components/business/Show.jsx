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
    var business = BusinessStore.find(parseInt(newProps.params.id));
    this.setState({business: business});
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
                  <div><Rating full="glyphicon glyphicon-star large"
                          empty="glyphicon glyphicon-star-empty large"
                          initialRate={business.average_rating}
                          readonly={true}
                          fractions={6} />
                        <span className="main-rating-beside">
                            {business.reviews.length} reviews
                          </span></div> :
                          <h4 className="no-reviews">No reviews</h4>;
    var description = business.description;
    // <ImageIndex business={business} images={business.images}/>
    return(
      <div>
        <h2>{business.name}</h2>
        {rating}
        <img className="business-image" src={business.yelp_image_url}/>
        <Map businesses={[business]} mapClass="businessMap"/>
        <p>{address}</p>
        <ReviewIndex business={business}
                     reviews={business.reviews}
                     hiddenForm={true}/>
        <div className="hours-information">
          <h4>Hours and Other Information:</h4>
          <p>Delivery: {business.delivery ? "Yes" : "No"}</p>
          <p>Accepts Credit Card: {business.accept_cc ? "Yes" : "No"}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
});

module.exports = Business;
