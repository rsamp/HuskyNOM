var React = require('react'),
    ReviewStore = require('../../stores/review'),
    ApiUtil = require('../../util/api_util'),
    ReviewIndexItem = require('./IndexItem'),
    ReviewForm = require('./Form');

var ReviewIndex = React.createClass({
  getInitialState: function() {
    return {reviews: ReviewStore.all(), hiddenForm: this.props.hiddenForm};
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

  toggleForm: function() {
    this.setState({hiddenForm: !this.state.hiddenForm});
  },

  render: function() {
    var business = this.props.business;
    var reviews = this.state.reviews.map(function(review) {
      if (business.id === review.business_id) {
        return <ReviewIndexItem key={review.id} review={review}/>;
      }
    });

    var formButton = this.state.hiddenForm ?
                  <button onClick={this.toggleForm}
                          className="form-control purple-button"
                          id="review-button">Write a review</button> : "";

    // var noReviews;
    // if (business.reviews.length === 0){
    //   noReviews = "There are no reviews for this restaurant. Be the first!";
    // }
    // if (reviews[0] === undefined){
    //   reviews = "There are no reviews for this restaurant. Be the first!"
    // }

    return (
      <div>
        <ReviewForm business={business}
                    hiddenForm={this.state.hiddenForm}
                    toggleForm={this.toggleForm}/>
        {formButton}
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
