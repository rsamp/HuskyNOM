var React = require('react'),
    History = require('react-router').History,
    Rating = require('react-rating'),
    ApiActions = require('../../actions/api_actions'),
    HoverStore = require('../../stores/hover');

var BusinessIndexItem = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return({hoverID: HoverStore.hoverID()});
  },

  handleClick: function(){
    var url = '/businesses/' + this.props.business.id;
    this.history.pushState({business: this.props.business}, url);
  },

  handleMouseOn: function(e){
    ApiActions.handleListItemHover(e);
  },

  handleMouseOut: function(e){
    ApiActions.handleLeave(e);
  },

  _hoverChanged: function(){
    setTimeout(function(){
      this.setState({hoverID: HoverStore.hoverID()});
    }.bind(this), 1);
  },

  componentDidMount: function(){
    this.hoverListener = HoverStore.addListener(this._hoverChanged);
  },

  componentWillUnmount: function(){
    this.hoverListener.remove();
  },

  render: function(){
    var business = this.props.business;
    var businessName = business.name.length < 32 ?
                        <h4>{business.name}</h4> :
                        <h4 className="long-business">{business.name}</h4>;
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
      <li className="business-index-item"
          onClick={this.handleClick}
          data-id={business.id}
          onMouseOver={this.handleMouseOn}
          onMouseLeave={this.handleMouseOut}>
        {businessName}
        {rating}
      </li>
    );
  }
});

module.exports = BusinessIndexItem;
