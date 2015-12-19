var React = require('react'),
    ImageStore = require('../../stores/image'),
    ApiUtil = require('../../util/api_util'),
    AddImageButton = require('./AddButton'),
    ImageIndexItem = require('./IndexItem');

var ImageIndex = React.createClass({
  getInitialState: function(){
    return {images: []};
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
    var data = {image: {cloudinary_id: image.public_id, business_id: this.props.businessId}};
    ApiUtil.createImage(data);
  },

  render: function(){
    var images = this.state.images.map(function(image){
      if (this.props.businessId === image.business_id) {
        return (
          <ImageIndexItem image={image} key={image.id}/>
        );
      }
    }.bind(this));

    return(
      <div className="images">
        <AddImageButton postImage={this.postImage}/>
        <ul>
          {images}
        </ul>
      </div>
    );
  }
});

module.exports = ImageIndex;
