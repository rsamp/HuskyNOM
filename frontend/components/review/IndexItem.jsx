var React = require('react'),
    Rating = require('react-rating');

var ReviewIndexItem = React.createClass({
  render: function(){
    var review = this.props.review;
    var date = new Date(review.created_at).toLocaleDateString();
    var user = review.author.username;
    var rating = review.rating;

    // var editButton = user === window.CURRENT_USER.username ?
    //             <button onClick={this.editReview}>Edit Review</button> : "";

    return (
      <li>
        <div className="row review-content">
          <div className="col-md-2 user-info">
            {user}
          </div>
          <div className="col-md-10 review-info">
            <Rating full="glyphicon glyphicon-star med"
                    empty="glyphicon glyphicon-star-empty med"
                    initialRate={rating} readonly={true} />
            <span className="review-beside">{date}</span>
            <br/>
            {review.body}
          </div>
        </div>
      </li>
    );
  }
});

// {editButton}

module.exports = ReviewIndexItem;
