var React = require('react'),
    ReviewStore = require('../../stores/review'),
    ApiUtil = require('../../util/api_util'),
    ReviewIndexItem = require('./IndexItem'),
    ReviewForm = require('./Form'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var ReviewIndex = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      reviews: this.props.business.reviews,
      hiddenForm: true,
      sortBy: "Most Recent"
    };
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

  sortReviews: function(){
    var reviews = this.state.reviews.slice(0);

    switch (this.state.sortBy) {
      case "Most Recent":
        reviews.sort(function(a,b) {
            var aDate = new Date(a.created_at);
            var bDate = new Date(b.created_at);
            return bDate - aDate;
        });
        break;
      case "Oldest":
        reviews.sort(function(a,b) {
            var aDate = new Date(a.created_at);
            var bDate = new Date(b.created_at);
            return aDate - bDate;
        });
        break;
      case "Highest Rating":
        reviews.sort(function(a,b) {
            return b.rating - a.rating;
        });
        break;
      case "Lowest Rating":
        reviews.sort(function(a,b) {
            return a.rating - b.rating;
        });
        break;
    }
    return reviews;
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
    var reviews = this.sortReviews();

    reviews = reviews.map(function(review) {
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
      <div className="review-area">
        <ReviewForm business={business}
                    hiddenForm={this.state.hiddenForm}
                    toggleForm={this.toggleForm}/>
        {formButton}
        <h3 className="reviews-header">Reviews for {business.name}</h3>
          <select name="sort" className="form-control" id="review-sort" valueLink={this.linkState('sortBy')}>
            <option value={"Most Recent"}>Date: Most Recent First</option>
            <option value={"Oldest"}>Date: Oldest First</option>
            <option value={"Highest Rating"}>Rating: Highest First</option>
            <option value={"Lowest Rating"}>Rating: Lowest First</option>
          </select>
        <ul className="reviews-area">
          {reviews}
        </ul>
      </div>
    );
  }
});

module.exports = ReviewIndex;
