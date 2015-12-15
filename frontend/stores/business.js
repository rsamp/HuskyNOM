var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BusinessStore = new Store(AppDispatcher),
    BusinessConstants = require('../constants/businessConstants');

var _businesses = [];

var resetBusinesses = function(businesses){
  _businesses = businesses.slice(0);
}

var createBusiness = function(business){
  _businesses[business.id] = business;
}

BusinessStore.all = function(){
  return _businesses.slice(0);
};

BusinessStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case BusinessConstants.BUSINESSES_RECEIVED:
      resetBusinesses(payload.businesses)
      break;
    case BusinessConstants.BUSINESS_RECEIVED:
      createBusiness(payload.business)
      break;
  }
  BusinessStore.__emitChange();
};

module.exports = BusinessStore;
