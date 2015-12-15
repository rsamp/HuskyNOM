var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchCurrentUser: function(){
    
  },

  fetchBusinesses: function(){
    $.ajax({
      method: "GET",
      // data: {bounds: bounds},
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
