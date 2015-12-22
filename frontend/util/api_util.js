var ApiActions = require('../actions/api_actions'),
    FilterParamsStore = require('../stores/filter_params');

var ApiUtil = {
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

  fetchBusiness: function(id){
    $.ajax({
      method: "GET",
      url: "api/businesses/" + id,
      data: {id: id},
      success: function(business){
        ApiActions.receiveBusiness(business);
      }
    });
  },

  createBusiness: function(data, callback){
    $.ajax({
      method: "POST",
      url: "api/businesses",
      data: {business: data},
      success: function(business){
        callback(business);
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
  },

  fetchImages: function(){
    $.ajax({
      method: "GET",
      url: "api/images",
      success: function(images){
        ApiActions.receiveAllImages(images);
      }
    });
  },

  createImage: function(data){
    $.ajax({
      method: "POST",
      url: "api/images",
      data: data,
      success: function(image){
        ApiActions.createImage(image);
      }
    });
  }
};

module.exports = ApiUtil;
