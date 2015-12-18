var React = require('react'),
    Rating = require('react-rating');

var ReviewIndexItem = React.createClass({
  render: function(){
    var review = this.props.review;
    var date = review.created_at.split("T")[0];
    var user = review.author.username;
    var rating = review.rating;

    // var reviewName = "review" + review.id;

    // var checked = [];

    // for (var i = 1; i < 6; i++){
    //   if (i === rating){
    //     checked.push("checked");
    //   } else {
    //     checked.push("");
    //   }
    // }
    //
    // var starRating = checked.map(function(star, idx){
    //   return <input name={reviewName}
    //                 key={idx}
    //                 type="radio"
    //                 readOnly
    //                 className="star posted-review"
    //                 checked={checked[idx]} />;
    // });

    var ratingStyle= {
      color: 'white'
    };

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

//full="glyphicon glyphicon-align-justify"

module.exports = ReviewIndexItem;
