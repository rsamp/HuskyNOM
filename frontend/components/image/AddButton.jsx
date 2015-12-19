var React = require('react');

var AddImageButton = React.createClass({
  uploadImage: function(e){
    e.preventDefault();

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.props.postImage(results[0]);
      }
    }.bind(this));
  },

  render: function(){
    return(
      <div className="upload-image">
        <button onClick={this.uploadImage}>Add Photo</button>
      </div>
    );
  }
});

module.exports = AddImageButton;
