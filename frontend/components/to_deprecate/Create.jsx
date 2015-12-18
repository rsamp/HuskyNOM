var React = require('react'),
    ReviewForm = require('./Form');

var CreateReview = React.createClass({

  render: function(){
    var business = this.props.business;
    debugger;
    return(
      <div>
        <ReviewForm business={business}/>
        Create Review
      </div>
    );
  }
});

module.exports = CreateReview;
