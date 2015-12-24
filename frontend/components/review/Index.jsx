var React = require('react'),
    ReviewStore = require('../../stores/review'),
    ApiUtil = require('../../util/api_util'),
    ReviewIndexItem = require('./IndexItem'),
    ReviewForm = require('./Form');

var ReviewIndex = React.createClass({
  getInitialState: function() {
    return {reviews: this.props.business.reviews, hiddenForm: true};
  },

  _onChange: function() {
    this.setState({reviews: this.props.business.reviews});
  },

  componentDidMount: function() {
    this.reviewListener = ReviewStore.addListener(this._onChange);
    ApiUtil.fetchReviews();
  },

  componentWillReceiveProps: function(newProps){
    this.setState({reviews: newProps.reviews, hiddenForm: true});
  },

  componentWillUnmount: function() {
    this.reviewListener.remove();
  },

  toggleForm: function() {
    this.setState({hiddenForm: !this.state.hiddenForm});
  },

  render: function(){
    if (this.state.reviews){
      return this.renderReviews();
    } else {
      return <div/>;
    }
  },

  renderReviews: function() {
    var business = this.props.business;
    var reviews = this.state.reviews.map(function(review) {
      return <ReviewIndexItem key={review.id} review={review}/>;
    });

    var formButton = this.state.hiddenForm ?
                  <button onClick={this.toggleForm}
                          className="form-control purple-button"
                          id="review-button">Write a review</button> : "";

    if (this.state.reviews.length === 0){
      reviews = "There are no reviews for this restaurant. Be the first!";
    }

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
  }
});

module.exports = ReviewIndex;
