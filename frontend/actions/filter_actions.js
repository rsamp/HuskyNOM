var AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filterConstants');

var FilterActions = {
  updateBounds: function(bounds){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_BOUNDS,
      bounds: bounds
    });
  },

  updateDelivery: function(value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_DELIVERY,
      delivery: value
    })
  },

  updateCreditCard: function(value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_ACCEPT_CC,
      accept_cc: value
    })
  }
};

module.exports = FilterActions;
