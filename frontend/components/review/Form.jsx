var React = require('react'),
    ApiUtil = require('../../util/api_util'),
    Rating = require('react-rating'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var ReviewForm = React.createClass({
  mixins: [LinkedStateMixin],

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

    return(
      <div hidden={this.props.hiddenForm}>
        <h3>Write a Review</h3>
        <form onSubmit={this.handleSubmit} className="input-group review">
          <Rating full="glyphicon glyphicon-star large"
                  empty="glyphicon glyphicon-star-empty large"
                  initialRate={this.state.rating}
                  onChange={this.handleRating} />
          <br/>
          <textarea className="form-control review-textarea" rows="4"
                    placeholder='Enter your review here'
                    valueLink={this.linkState('body')}></textarea>
          <br/>
          <input type='submit' className="form-control purple-button" id="review-button" value='Post Review'/>
          <a onClick={this.props.toggleForm} className="cancel-button">cancel</a>
        </form>
      </div>
    );
  }
});

module.exports = ReviewForm;
