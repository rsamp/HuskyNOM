var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BusinessStore = new Store(AppDispatcher),
    BusinessConstants = require('../constants/businessConstants');

var _businesses = [];

var resetBusinesses = function(businesses){
  _businesses = businesses.slice(0);
}

BusinessStore.all = function(){
  return _businesses.slice(0);
};

BusinessStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case BusinessConstants.BUSINESSES_RECEIVED:
      var result = resetBusinesses(payload.businesses)
      break;

  }
  BusinessStore.__emitChange();
};

module.exports = BusinessStore;
