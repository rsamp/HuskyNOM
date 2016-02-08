var React = require('react'),
    Rating = require('react-rating');

var ReviewIndexItem = React.createClass({
  render: function(){
    var review = this.props.review;
    var date = new Date(review.created_at).toLocaleDateString();
    var user = review.author.username;
    var rating = review.rating;
    var yelpLink = "";

    var displayStars = <Rating full="glyphicon glyphicon-star med"
                               empty="glyphicon glyphicon-star-empty med"
                               initialRate={rating} readonly={true} />;

    if (review.is_yelp_review) {
      user = <div>{review.yelp_username}<img src={review.yelp_user_image}/></div>;
      yelpLink = <a target="_blank" href={review.business.yelp_url}>See more at Yelp.com</a>;
      displayStars = <img src={review.yelp_url}/>;
    }

    // var editButton = user === window.CURRENT_USER.username ?
    //             <button onClick={this.editReview}>Edit Review</button> : "";

    return (
      <li>
        <div className="row review-content">
          <div className="col-md-2 user-info">
            {user}
          </div>
          <div className="col-md-10 review-info">
            {displayStars}
            <span className="review-beside">{date}</span>
            <br/>
            {review.body}
            {yelpLink}
          </div>
        </div>
      </li>
    );
  }
});

// {editButton}

module.exports = ReviewIndexItem;
