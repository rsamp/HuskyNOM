var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    HoverStore = new Store(AppDispatcher);

var _hoverID = null;

HoverStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case "RECEIVE_HOVER_ID":
      if (_hoverID === payload.hoverID){
        return;
      }
      _hoverID = payload.hoverID;
      HoverStore.__emitChange();
      break;
    case "RESET_HOVER_ID":
      _hoverID = null;
      HoverStore.__emitChange();
      break;
  }
};

HoverStore.hoverID = function(){
  return _hoverID;
};

module.exports = HoverStore;
