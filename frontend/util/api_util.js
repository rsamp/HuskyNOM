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
        ApiActions.receiveAll(businesses);
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
  }
};

module.exports = ApiUtil;
