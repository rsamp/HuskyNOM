var React = require('react'),
    ReactDOM = require('react-dom');

var Map = React.createClass({
  componentDidMount: function(){
    debugger;
    var business = this.props.businesses[0];
    console.log("mounting map");
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: business.lat, lng: business.lng},
      zoom: 16,
      draggable: false
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.markers = [];
    this.createMarker();
  },

  createMarker: function(){
    var business = this.props.businesses[0];
    var pos = new google.maps.LatLng(business.lat, business.lng)
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      title: business.name,
      businessId: business.id
    });
    this.markers.push(marker);
  },

  componentWillUnmount: function(){
    console.log("map unmounted");
  },

  render: function(){
    return (<div ref="map" className={this.props.mapClass}>Map</div>)
  }
});

module.exports = Map;
