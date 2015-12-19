var React = require('react'),
    ReviewStore = require('../../stores/review'),
    ApiUtil = require('../../util/api_util'),
    ReviewIndexItem = require('./IndexItem'),
    ReviewForm = require('./Form');

var ReviewIndex = React.createClass({
  getInitialState: function() {
    return {reviews: ReviewStore.all()};
  },

  _onChange: function() {
    this.setState({reviews: ReviewStore.all()});
  },

  componentDidMount: function() {
    this.reviewListener = ReviewStore.addListener(this._onChange);
    ApiUtil.fetchReviews();
  },

  componentWillUnmount: function() {
    this.reviewListener.remove();
  },

  createReview: function(e) {
    e.preventDefault();
    // Need to figure out how to hide by default and slide out when clicked
  },

  render: function() {
    var business = this.props.business;
    var reviews = this.state.reviews.map(function(review) {
      if (business.id === review.business_id) {
        return <ReviewIndexItem key={review.id} review={review}/>;
      }
    });
    // var noReviews;
    // if (business.reviews.length === 0){
    //   noReviews = "There are no reviews for this restaurant. Be the first!";
    // }
    // if (reviews[0] === undefined){
    //   reviews = "There are no reviews for this restaurant. Be the first!"
    // }

    return (
      <div>
        <button onClick={this.createReview}>Write a review</button>
        <ReviewForm business={business}/>
        <h3>Reviews for {business.name}</h3>
        <ul>
          {reviews}
        </ul>
      </div>
    );
    // {business.reviews.length > 0 ? reviews : noReviews}
  }
});

module.exports = ReviewIndex;
