var AppDispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    FilterConstants = require('../constants/filterConstants'),
    FilterParamsStore = new Store(AppDispatcher);

var _params = {delivery: false, accept_cc: false};

FilterParamsStore.params = function(){
  return Object.assign({}, _params);
};

FilterParamsStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case FilterConstants.UPDATE_BOUNDS:
      _params.bounds = payload.bounds;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_DELIVERY:
      _params.delivery = payload.delivery;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_ACCEPT_CC:
      _params.accept_cc = payload.accept_cc;
      FilterParamsStore.__emitChange();
      break;
  }
};

module.exports = FilterParamsStore;
