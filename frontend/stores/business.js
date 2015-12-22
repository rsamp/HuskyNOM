var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BusinessStore = new Store(AppDispatcher),
    BusinessConstants = require('../constants/businessConstants');

var _filteredBusinesses = [];
var _allBusinesses = [];

var filterBusinesses = function(businesses){
  _filteredBusinesses = businesses.slice(0);
};

var allBusinesses = function(businesses){
  _allBusinesses = businesses;
};

var createBusiness = function(business){
  _filteredBusinesses.push(business);
  _allBusinesses.push(business);
};

// var fetchBusiness = function(business){
//   _allBusinesses.find(business);
// };

BusinessStore.all = function(){
  return _allBusinesses.slice(0);
};

// BusinessStore.find = function(id){
//   return _allBusinesses[id];
// };

BusinessStore.last = function(){
  var last = _allBusinesses.pop();
  _allBusinesses.push(last);
  return last;
};

BusinessStore.filtered = function(){
  return _filteredBusinesses.slice(0);
};

BusinessStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case BusinessConstants.BUSINESSES_RECEIVED:
      filterBusinesses(payload.businesses);
      BusinessStore.__emitChange();
      break;
    case BusinessConstants.BUSINESS_RECEIVED:
      createBusiness(payload.business);
      BusinessStore.__emitChange();
      break;
    case BusinessConstants.ALL_BUSINESSES_RECEIVED:
      allBusinesses(payload.businesses);
      BusinessStore.__emitChange();
      break;
  }
};

module.exports = BusinessStore;
