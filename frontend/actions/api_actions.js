var AppDispatcher = require('../dispatcher/dispatcher'),
    BusinessConstants = require('../constants/businessConstants'),
    ReviewConstants = require('../constants/reviewConstants'),
    ImageConstants = require('../constants/imageConstants'),
    HoverConstants = require('../constants/hoverConstants');

var ApiActions = {

  // For Map bounds filtering
  receiveFilteredBusinesses: function(businesses) {
    AppDispatcher.dispatch({
      actionType: BusinessConstants.BUSINESSES_RECEIVED,
      businesses: businesses
    });
  },

  receivePageChange: function(page){
    AppDispatcher.dispatch({
      actionType: BusinessConstants.PAGINATION_RECEIVED,
      page: page
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
      actionType: HoverConstants.RECEIVE_HOVER_ID,
      hoverID: hoverID
    });
  },

  handleMarkerHover: function(hoverID){
    AppDispatcher.dispatch({
      actionType: HoverConstants.RECEIVE_HOVER_ID,
      hoverID: hoverID
    });
  },

  handleLeave: function(event) {
    AppDispatcher.dispatch({
      actionType: HoverConstants.RESET_HOVER_ID
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
