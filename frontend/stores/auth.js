// var Store = require('flux/utils').Store,
//     AppDispatcher = require('../dispatcher/dispatcher'),
//     AuthStore = new Store(AppDispatcher),
//     AuthConstants = require('../constants/authConstants');
//
// var _auth = [];
//
// var _sessionState = {userId: null};
//
// // var loginUser = function(user){
// //   _auth = auth.slice(0);
// // }
//
// // var createBusiness = function(auth){
// //   _auth[auth.id] = auth;
// // }
//
// AuthStore.currentUser = function(){
//   return _auth[0];
// };
//
// AuthStore.__onDispatch = function(payload){
//   switch (payload.actionType) {
//     case AuthConstants.USER_LOGGED_IN:
//       loginUser(payload.user);
//       AuthStore.__emitChange();
//       break;
//     case AuthConstants.USER_LOGGED_OUT:
//       logoutUser(payload.user);
//       AuthStore.__emitChange();
//       break;
//   }
// };
//
// module.exports = AuthStore;
