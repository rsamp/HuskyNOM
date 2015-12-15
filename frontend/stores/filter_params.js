var AppDispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    FilterConstants = require('../constants/filterConstants'),
    FilterParamsStore = new Store(AppDispatcher);

var _params = {};

FilterParamsStore.params = function(){
  return Object.assign({}, _params);
};

FilterParamsStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case FilterConstants.UPDATE_BOUNDS:
      _params.bounds = payload.bounds;
      break;
  }
  FilterParamsStore.__emitChange();
}

module.exports = FilterParamsStore;
