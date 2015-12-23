var React = require('react'),
    ImageStore = require('../../stores/image'),
    ApiUtil = require('../../util/api_util'),
    AddImageButton = require('./AddButton'),
    ImageIndexItem = require('./IndexItem'),
    Carousel = require('react-responsive-carousel').Carousel;

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
    var data = {
      image: {
        cloudinary_id: image.public_id, business_id: this.props.businessId
      }};
    ApiUtil.createImage(data);
  },

  render: function(){
    var images = this.state.images.map(function(image){
      if (this.props.businessId === image.business_id) {
        return (
          // <img key={image.id} src={'http://res.cloudinary.com/djk3yhmfn/image/upload/w_200,h_200,c_fit/' + image.cloudinary_id}/>

          <ImageIndexItem image={image} key={image.id}/>
        );
      }
    }.bind(this));

    // var carousel = "";
    //
    // if (images.length !== 0) {
    //   carousel = <Carousel type="slider" showControls={true} showStatus={true}>{images}</Carousel>;
    // }

    // debugger;
    return(
      <div className="images">
        <AddImageButton postImage={this.postImage}/>
        <br/>
        <ul>
          {images}
        </ul>
      </div>
    );
  }
});

// {carousel}
module.exports = ImageIndex;
