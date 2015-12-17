var ApiActions = require('../actions/api_actions'),
    FilterParamsStore = require('../stores/filter_params');

ApiUtil = {
  // fetchCurrentUser: function(){
  //
  // },

  fetchBusinesses: function(){
    var filter = FilterParamsStore.params();
    $.ajax({
      method: "GET",
      data: filter,
      url: "api/businesses",
      success: function(businesses){
        ApiActions.receiveFilteredBusinesses(businesses);
      }
    });
  },

  fetchAllBusinesses: function(){

    $.ajax({
      method: "GET",
      url: "api/businesses",
      success: function(businesses){
        ApiActions.receiveAllBusinesses(businesses);
      }
    });
  },

  createBusiness: function(data){
    $.ajax({
      method: "POST",
      url: "api/businesses",
      data: {business: data},
      success: function(business){
        ApiActions.createBusiness(business);
      }
    });
  },

  fetchReviews: function(){
    $.ajax({
      method: "GET",
      url: "api/reviews",
      success: function(reviews){
        ApiActions.receiveAllReviews(reviews);
      }
    });
  },

  createReview: function(data){
    $.ajax({
      method: "POST",
      url: "api/reviews",
      data: {review: data},
      success: function(review){
        ApiActions.createReview(review);
      }
    });
  }
};

module.exports = ApiUtil;
