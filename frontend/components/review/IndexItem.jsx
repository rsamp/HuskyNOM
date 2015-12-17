var React = require('react');

var ReviewIndexItem = React.createClass({
  render: function(){
    var review = this.props.review;
    var date = review.created_at.split("T")[0];
    return (
      <li>
          <div className="user-info">
            UserID: {review.author.username}
          </div>
          <div className="review-info">
            Rating: {review.rating}
            <br/>
            Date: {date}
            <br/>
            Body: {review.body}
          </div>
      </li>
    );
  }
});

module.exports = ReviewIndexItem;
