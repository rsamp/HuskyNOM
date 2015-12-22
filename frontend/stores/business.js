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

var fetchBusiness = function(business){
  return BusinessStore.find(business);
};

BusinessStore.all = function(){
  return _allBusinesses.slice(0);
};

BusinessStore.fetchTen = function(startIdx){
  return _filteredBusinesses.slice(startIdx, startIdx + 10);
},

BusinessStore.find = function(id){
  for (var i = 0; i < _allBusinesses.length; i++) {
    if (_allBusinesses[i].id === id){
      return _allBusinesses[i];
    }
  }
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
    case BusinessConstants.FIND_BUSINESS:
      fetchBusiness(payload.business);
      BusinessStore.__emitChange();
      break;
  }
};

module.exports = BusinessStore;
