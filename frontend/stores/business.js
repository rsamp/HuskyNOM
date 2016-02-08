var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BusinessStore = new Store(AppDispatcher),
    BusinessConstants = require('../constants/businessConstants');

var _filteredBusinesses = [];
var _allBusinesses = [];
var _paginatedBusinesses = [];
var _currentPage = 0;

var filterBusinesses = function(businesses){
  _filteredBusinesses = businesses.slice(0);
  paginateBusinesses(_currentPage);
};

var allBusinesses = function(businesses){
  _allBusinesses = businesses;
};

var paginateBusinesses = function(page){
  var businesses = _filteredBusinesses.slice(0);
  _currentPage = page;

  var groupsOfTenBusinesses = [];

  while (businesses.length > 0){
    groupsOfTenBusinesses.push(businesses.splice(0, 10));
  }

  _paginatedBusinesses = groupsOfTenBusinesses[_currentPage];
};

var updateBusiness = function(business){
  for (var i = 0; i < _allBusinesses.length; i++) {
    if (_allBusinesses[i].id === business.id) {
      _allBusinesses[i] = business;
    }
  }
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

BusinessStore.paginated = function(){
  if (_filteredBusinesses.length > 0) {
    return _paginatedBusinesses.slice(0);
  } else {
    return [];
  }
};

BusinessStore.resetPage = function(){
  _currentPage = 0;
};

BusinessStore.filteredCount = function(){
  return _filteredBusinesses.length;
};

BusinessStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case BusinessConstants.BUSINESSES_RECEIVED:
      filterBusinesses(payload.businesses);
      // paginateBusinesses(_currentPage);
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
      updateBusiness(payload.business);
      BusinessStore.__emitChange();
      break;
    case BusinessConstants.PAGINATION_RECEIVED:
      paginateBusinesses(payload.page);
      BusinessStore.__emitChange();
      break;
  }
};

module.exports = BusinessStore;
