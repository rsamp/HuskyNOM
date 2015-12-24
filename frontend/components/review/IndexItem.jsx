var React = require('react'),
    Rating = require('react-rating');

var ReviewIndexItem = React.createClass({
  render: function(){
    var review = this.props.review;
    var date = review.created_at.split("T")[0];
    var user = review.author.username;
    var rating = review.rating;

    // var editButton = user === window.CURRENT_USER.username ?
    //             <button onClick={this.editReview}>Edit Review</button> : "";

    return (
      <li>
        <div className="row">
          <div className="col-md-1 user-info">
            {user}
          </div>
          <div className="col-md-8 review-info">
            <Rating full="glyphicon glyphicon-star med"
                    empty="glyphicon glyphicon-star-empty med"
                    initialRate={rating} readonly={true} />
            <br/>
            Date: {date}
            <br/>
            Body: {review.body}
          </div>
        </div>
      </li>
    );
  }
});

// {editButton}

module.exports = ReviewIndexItem;
