var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    ImageStore = new Store(AppDispatcher),
    ImageConstants = require('../constants/imageConstants');

var _images = [];

var resetImages = function(images){
  _images = images.slice(0);
};

var createImage = function(image){
  _images.push(image);
};

// ImageStore.imagesByBusiness = function(business){
//   var imagesByBusiness = [];
//
//   _images.forEach(function(image){
//     if (image.business.id === business.id){
//       imagesByBusiness.push(image);
//     }
//   });
//   return imagesByBusiness;
// };

ImageStore.all = function(){
  return _images.slice(0);
};

ImageStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case ImageConstants.IMAGES_RECEIVED:
      resetImages(payload.images);
      ImageStore.__emitChange();
      break;
    case ImageConstants.IMAGE_RECEIVED:
      createImage(payload.image);
      ImageStore.__emitChange();
      break;
  }
};

module.exports = ImageStore;
