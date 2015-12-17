var React = require('react'),
    ReviewStore = require('../../stores/review'),
    ApiUtil = require('../../util/api_util'),
    ReviewIndexItem = require('./IndexItem');

var ReviewIndex = React.createClass({
  getInitialState: function(){
    return {reviews: ReviewStore.all()}
  },

  _onChange: function(){
    this.setState({reviews: ReviewStore.all()})
  },

  componentDidMount: function(){
    this.reviewListener = ReviewStore.addListener(this._onChange);
    ApiUtil.fetchReviews();
  },

  componentWillUnmount: function(){
    this.reviewListener.remove();
  },

  render: function(){
    var business = this.props.business;
    var reviews = this.state.reviews.map(function(review){
      if (business.id === review.business_id){
        return <ReviewIndexItem key={review.id} review={review} />
      }
    });

    if (reviews[0] === undefined){
      reviews = "There are no reviews for this restaurant. Be the first!"
    }

    return(
      <ul>
        {reviews}
      </ul>
    );
  }
})

module.exports = ReviewIndex
