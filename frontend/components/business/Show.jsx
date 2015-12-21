var React = require('react'),
    Map = require('./Map'),
    ReviewIndex = require('../review/Index'),
    History = require('react-router').History,
    ImageIndex = require('../image/Index'),
    Rating = require('react-rating');

var Business = React.createClass({
  mixins: [History],

  getInitialState: function(){
    // set business to store
    // debugger;
    return {business: this.props.location.state.business};
  },
  componentDidMount: function () {
    //fetch business from API
    //add listener to store
  },
  componentWillUnmount: function () {
    // console.log("unmounting");
  },
  componentWillReceiveProps: function(newProps) {
    // console.log(newProps);
    this.setState({business: newProps.location.state.business});
    //fetch new business from store and setstate
  },
  render: function(){
    var business = this.state.business;
    var address = business.address;
    var rating = business.average_rating ?
                  <Rating full="glyphicon glyphicon-star large"
                          empty="glyphicon glyphicon-star-empty large"
                          initialRate={business.average_rating}
                          readonly={true}
                          fractions={12} /> :
                  <h4>No reviews</h4>;


    return(
      <div>
        <h2>{business.name}</h2>
        {rating}
        <ImageIndex businessId={business.id}/>
        <Map businesses={[business]} mapClass="businessMap"/>
        <p>{address}</p>
        <ReviewIndex business={business}/>
      </div>
    );
  }
});

module.exports = Business;


// <Rating full="glyphicon glyphicon-star" empty="glyphicon glyphicon-star-empty" initialRate={business.average_rating} readonly={true} />
