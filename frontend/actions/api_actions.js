var AppDispatcher = require('../dispatcher/dispatcher'),
    BusinessConstants = require('../constants/businessConstants'),
    ReviewConstants = require('../constants/reviewConstants');

var ApiActions = {
  receiveFilteredBusinesses: function(businesses){
    AppDispatcher.dispatch({
      actionType: BusinessConstants.BUSINESSES_RECEIVED,
      businesses: businesses
    })
  },

  receiveAllBusinesses: function(businesses){
    AppDispatcher.dispatch({
      actionType: BusinessConstants.ALL_BUSINESSES_RECEIVED,
      businesses: businesses
    })
  },

  // createBusiness: function(business){
  //   AppDispatcher.dispatch({
  //     actionType: BusinessConstants.BUSINESS_RECEIVED,
  //     business: business
  //   })
  // }

  receiveAllReviews: function(reviews){
    AppDispatcher.dispatch({
      actionType: ReviewConstants.REVIEWS_RECEIVED,
      reviews: reviews
    })
  }
};

module.exports = ApiActions;
