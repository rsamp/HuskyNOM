var React = require('react'),
    History = require('react-router').History,
    Rating = require('react-rating');

var BusinessIndexItem = React.createClass({
  mixins: [History],

  handleClick: function(){
    var url = '/businesses/' + this.props.business.id;
    this.history.pushState({business: this.props.business}, url);
  },

  render: function(){
    var business = this.props.business;
    var rating = business.average_rating ?
                  <div>
                    <Rating full="glyphicon glyphicon-star med index-rating"
                            empty="glyphicon glyphicon-star-empty med index-rating"
                            initialRate={business.average_rating}
                            readonly={true}
                            fractions={6} />
                    <span className="review-beside">
                      {business.reviews.length} reviews
                    </span>
                  </div> :
                  <h5>No reviews</h5>;

    return (
      <li className="business-index-item" onClick={this.handleClick}>
        <h4>{business.name}</h4>
        {rating}
      </li>
    );
  }
});

module.exports = BusinessIndexItem;
