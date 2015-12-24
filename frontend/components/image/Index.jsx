var React = require('react'),
    ImageStore = require('../../stores/image'),
    ApiUtil = require('../../util/api_util'),
    AddImageButton = require('./AddButton'),
    ImageIndexItem = require('./IndexItem');

var ImageIndex = React.createClass({
  getInitialState: function(){
    return {images: [], page: 0};
  },

  componentDidMount: function(){
    this.imageListener = ImageStore.addListener(this._onChange);
    ApiUtil.fetchImages();
  },

  componentWillUnmount: function() {
    this.imageListener.remove();
  },

  _onChange: function() {
    this.setState({images: ImageStore.all()});
  },

  postImage: function(image){
    var data = {
      image: {
        cloudinary_id: image.public_id, business_id: this.props.business.id
      }};
    ApiUtil.createImage(data);
  },

  pageUp: function(){
    this.setState({page: this.state.page + 1});
  },

  pageDown: function(){
    this.setState({page: this.state.page - 1});
  },

  render: function(){
    var imagesForBusiness = [];
    for (var i = 0; i < this.state.images.length; i++){
      if(this.props.business.id === this.state.images[i].business_id){
        imagesForBusiness.push(this.state.images[i]);
      }
    }

    var imagePairs = [];
    while (imagesForBusiness.length > 0){
      imagePairs.push(imagesForBusiness.splice(0, 2));
    }

    if (imagePairs.length > 0){
      var images = imagePairs[this.state.page].map(function(image){
        return <ImageIndexItem image={image} key={image.id}/>;
      });
    }

    var pageDownBtn = this.state.page > 0 ?
                    <button className="form-control purple-button"
                            id="image-prev"
                            onClick={this.pageDown}>Previous</button> : "";

    var pageUpBtn = this.state.page < imagePairs.length - 1?
                    <button className="form-control purple-button"
                            id="image-next"
                            onClick={this.pageUp}>Next</button> : "";

    return(
      <div className="images">
        <AddImageButton postImage={this.postImage}/>
        <br/>
        <ul className="carousel">
          {images}
        </ul>
        {pageDownBtn}
        {pageUpBtn}
      </div>
    );
  }
});

module.exports = ImageIndex;
