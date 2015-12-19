var React = require('react'),
    ImageStore = require('../../stores/image'),
    ApiUtil = require('../../util/api_util'),
    AddImageButton = require('./AddButton');

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
          <li className="image" key={image.id}>
            <img src={'http://res.cloudinary.com/djk3yhmfn/image/upload/' + image.cloudinary_id}/>
          </li>
        );
      }
    }.bind(this));

    return(
      <div>
        <AddImageButton postImage={this.postImage}/>
        <ul>
          {images}
        </ul>
      </div>
    );
  }
});

module.exports = ImageIndex;
