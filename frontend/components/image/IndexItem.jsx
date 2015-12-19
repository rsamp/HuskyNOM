var React = require('react');

var ImageIndexItem = React.createClass({


  render: function(){
    var image = this.props.image;

    return(
      <li className="image">
        <img src={'http://res.cloudinary.com/djk3yhmfn/image/upload/' + image.cloudinary_id}/>
      </li>
    );
  }
});

module.exports = ImageIndexItem;
