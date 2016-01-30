var AppDispatcher = require('../dispatcher/dispatcher'),
    BusinessConstants = require('../constants/businessConstants'),
    ReviewConstants = require('../constants/reviewConstants'),
    ImageConstants = require('../constants/imageConstants');

var ApiActions = {
  receiveFilteredBusinesses: function(businesses) {
    AppDispatcher.dispatch({
      actionType: BusinessConstants.BUSINESSES_RECEIVED,
      businesses: businesses
    });
  },

  receiveAllBusinesses: function(businesses) {
    AppDispatcher.dispatch({
      actionType: BusinessConstants.ALL_BUSINESSES_RECEIVED,
      businesses: businesses
    });
  },

  fetchBusiness: function(business){
    AppDispatcher.dispatch({
      actionType: BusinessConstants.FIND_BUSINESS,
      business: business
    });
  },

  handleListItemHover: function(event){
    var hoverID = event.target.getAttribute("data-id");
    if(!hoverID){return;}
    AppDispatcher.dispatch({
      actionType: "RECEIVE_HOVER_ID",
      hoverID: hoverID
    });
  },

  handleMarkerHover: function(hoverID){
    // debugger;
    AppDispatcher.dispatch({
      actionType: "RECEIVE_HOVER_ID",
      hoverID: hoverID
    });
  },

  handleLeave: function(event) {
    AppDispatcher.dispatch({
      actionType: "RESET_HOVER_ID"
    });
  },

  createBusiness: function(business){
    AppDispatcher.dispatch({
      actionType: BusinessConstants.BUSINESS_RECEIVED,
      business: business
    });
  },

  receiveAllReviews: function(reviews) {
    AppDispatcher.dispatch({
      actionType: ReviewConstants.REVIEWS_RECEIVED,
      reviews: reviews
    });
  },

  createReview: function(review) {
    AppDispatcher.dispatch({
      actionType: ReviewConstants.REVIEW_RECEIVED,
      review: review
    });
  },

  receiveAllImages: function(images) {
    AppDispatcher.dispatch({
      actionType: ImageConstants.IMAGES_RECEIVED,
      images: images
    });
  },

  createImage: function(image) {
    AppDispatcher.dispatch({
      actionType: ImageConstants.IMAGE_RECEIVED,
      image: image
    });
  }
};

module.exports = ApiActions;
