var React = require('react'),
    FilterActions = require('../actions/filter_actions');

var Filters = React.createClass({
  deliveryChanged: function(e){
    FilterActions.updateDelivery(e.target.checked);
  },

  acceptCreditChanged: function(e){
    FilterActions.updateCreditCard(e.target.checked);
  },

  render: function(){
    return(
      <div>
        <h5>Filters</h5>
        <label>
          Delivery?
          <input type="checkbox" onChange={this.deliveryChanged}/>
        </label>
        <label>
          Accept Credit Card?
          <input type="checkbox" onChange={this.acceptCreditChanged}/>
        </label>
      </div>
    );
  }
});

module.exports = Filters;
