var React = require('react'),
    FilterActions = require('../actions/filter_actions');

var Filters = React.createClass({
  componentDidMount: function() {
    FilterActions.updateDelivery(false);
    FilterActions.updateCreditCard(false);
  },

  deliveryChanged: function(e){
    FilterActions.updateDelivery(e.target.checked);
  },

  acceptCreditChanged: function(e){
    FilterActions.updateCreditCard(e.target.checked);
  },

  render: function(){
    return(
      <div className="filters-all">
        <label>Filters:</label>
        <div className="filters">
          <label>
            Delivery?
            <input id="filter"
                   type="checkbox"
                   onChange={this.deliveryChanged}/>
          </label>
          <label>
            Accept Credit Card?
            <input id="filter"
                   type="checkbox"
                   onChange={this.acceptCreditChanged}/>
          </label>
        </div>
      </div>
    );
  }
});

module.exports = Filters;
