var React = require('react');

var ImageIndexItem = React.createClass({
  render: function(){
    var image = this.props.image;

    // Standardize width and height
    return(
      <li className="image">
        <img src={'http://res.cloudinary.com/djk3yhmfn/image/upload/w_200,h_200,c_fit/' + image.cloudinary_id}/>
      </li>
    );
  }
});

module.exports = ImageIndexItem;
