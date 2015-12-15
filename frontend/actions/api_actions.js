var AppDispatcher = require('../dispatcher/dispatcher'),
    BusinessConstants = require('../constants/businessConstants');

var ApiActions = {
  receiveAll: function(businesses){
    AppDispatcher.dispatch({
      actionType: BusinessConstants.BUSINESSES_RECEIVED,
      businesses: businesses
    })
  }
};

module.exports = ApiActions;
