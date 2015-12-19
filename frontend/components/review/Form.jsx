// require('jquery');
// require('bootstrap');
var React = require('react'),
    ApiUtil = require('../../util/api_util'),
    Rating = require('react-rating');

var ReviewForm = React.createClass({
  getInitialState: function(){
    return {rating: 0, body: ""};
  },

  handleSubmit: function(e){
    e.preventDefault();
    ApiUtil.createReview({
      business_id: this.props.business.id,
      rating: this.state.rating,
      body: this.state.body });

    this.setState({rating: 0, body: ""});
  },

  handleBody: function(e){
    this.setState({body: e.target.value});
  },

  handleRating: function(e){
    this.setState({rating: e});
  },

  render: function(){
    var business = this.props.business;

    var style = {
      color: 'blue'
    };

    return(
      <div>
        <h3>Write a Review</h3>
        <p>{business.address}</p>
        <form onSubmit={this.handleSubmit}>
          <Rating initialRate={this.state.rating} onChange={this.handleRating} />
          <br/>
          <textarea placeholder='Enter your review here'
                    onChange={this.handleBody}
                    value={this.state.body}></textarea>
          <br/>
          <input type='submit' value='Post Review'/>
        </form>
      </div>
    );
  }
});

// <Rating full="glyphicon glyphicon-star" empty="glyphicon glyphicon-star-empty" initialRate={this.state.rating} onChange={this.handleRating} />
module.exports = ReviewForm;
