var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchBusinesses: function(){
    $.get({
      url: "api/businesses",
      success: function(businesses){
        ApiActions.receiveAll(businesses)
      }
    });
  },

  createBusiness: function(data){
    $.post({
      url: "api/businesses",
      data: {business: data},
      success: function(){
        ApiActions.receiveAll([business])
      }
    });
  }
};

module.exports = ApiUtil;
