var React = require('react'),
    Rating = require('react-rating');

var ReviewIndexItem = React.createClass({
  render: function(){
    var review = this.props.review;
    var date = new Date(review.created_at).toLocaleDateString();
    var poweredByYelp = "";
    var user = review.author.username;
    var user_image = <img src='assets/no_user_img.jpeg' width='75' height='75'/>;
    var rating = review.rating;
    var yelpLink = "";

    var displayStars = <Rating full="glyphicon glyphicon-star med"
                               empty="glyphicon glyphicon-star-empty med"
                               initialRate={rating} readonly={true} />;

    if (review.is_yelp_review) {
      poweredByYelp = <img className="yelp-power" src='assets/yelp_powered_btn_light.png'/>;
      user = <div className="yelp-user-info">{review.yelp_username}<img className="yelp-user-image" src={review.yelp_user_image}/></div>;
      user_image = '';
      yelpLink = <a target="_blank" href={review.business.yelp_url}>See more at Yelp.com</a>;
      displayStars = <img className="yelp-stars" src={review.yelp_url}/>;
    }

    // var editButton = user === window.CURRENT_USER.username ?
    //             <button onClick={this.editReview}>Edit Review</button> : "";

    return (
      <li>
        <div className="row review-content">
          <div className="col-md-2 user-info">
            {user}
            {user_image}
          </div>
          <div className="col-md-10 review-info">
            {displayStars}
            <span className="review-beside">{date}{poweredByYelp}</span>
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
