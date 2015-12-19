var React = require('react'),
    Rating = require('react-rating');

var ReviewIndexItem = React.createClass({
  render: function(){
    var review = this.props.review;
    var date = review.created_at.split("T")[0];
    var user = review.author.username;
    var rating = review.rating;

    // var ratingStyle= {
    //   color: 'white'
    // };

    return (
      <li>
        <div className="row">
          <div className="col-md-1 user-info">
            {user}
          </div>
          <div className="col-md-8 review-info">
            <Rating initialRate={rating} readonly={true} />
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

// <Rating full="glyphicon glyphicon-star" empty="glyphicon glyphicon-star-empty" initialRate={rating} readonly={true} />
module.exports = ReviewIndexItem;
