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
                  <Rating full="glyphicon glyphicon-star med"
                          empty="glyphicon glyphicon-star-empty med"
                          initialRate={business.average_rating}
                          readonly={true}
                          fractions={6} /> :
                  <h4>No reviews</h4>;

    return (
      <li>
        <a>
          <h4 onClick={this.handleClick}>
            {business.name}
          </h4>
        </a>
        {rating}
        <p>Reviews: {business.reviews.length}</p>
      </li>
    );
  }
});

module.exports = BusinessIndexItem;
