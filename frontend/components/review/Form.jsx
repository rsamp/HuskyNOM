var React = require('react'),
    ApiUtil = require('../../util/api_util');

var ReviewForm = React.createClass({
  getInitialState: function(){
    return {rating: 5, body: ""};
  },

  handleSubmit: function(e){
    e.preventDefault();

    ApiUtil.createReview({
      business_id: this.props.business.id,
      rating: this.state.rating,
      body: this.state.body });

    this.setState({rating: 5, body: ""});
  },

  handleBody: function(e){
    this.setState({body: e.target.value});
  },

  handleRating: function(e){
    this.setState({rating: e.target.value});
  },

  render: function(){
    var business = this.props.business;

    return(
      <div>
        <h3>Write a Review</h3>
        <h5>{business.name}</h5>
        <p>{business.address}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Star Rating:
            <input id="input-id" className="rating" type='number' min='0' max='5' step='1' onChange={this.handleRating}/>
            <br/>
            <textarea placeholder='Enter your review here'
                      onChange={this.handleBody}
                      value={this.state.body}></textarea>
            <br/>
            <input type='submit' value='Post Review'/>
          </label>
        </form>
      </div>

    );
  }
});
// $("input-id").rating();

module.exports = ReviewForm;
