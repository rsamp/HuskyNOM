var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    ReviewStore = new Store(AppDispatcher),
    ReviewConstants = require('../constants/reviewConstants');

var _reviews = [];
var _showingReviews = [];

var resetReviews = function(reviews){
  _reviews = reviews.slice(0);
};

var createReview = function(review){
  _reviews.push(review);
};

ReviewStore.all = function(){
  return _reviews.slice(0);
};

ReviewStore.initialFive = function(){
  _showingReviews = _reviews.slice(0, 5);
  return _showingReviews;
},

ReviewStore.addFive = function(){
  var showingRevCount = _showingReviews.length;
  _showingReviews = _showingReviews.concat(_reviews.slice(showingRevCount + 1, showingRevCount + 6));
  return _showingReviews;
};

ReviewStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case ReviewConstants.REVIEWS_RECEIVED:
      resetReviews(payload.reviews);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.REVIEW_RECEIVED:
      createReview(payload.review);
      ReviewStore.__emitChange();
      break;
  }
};

module.exports = ReviewStore;
