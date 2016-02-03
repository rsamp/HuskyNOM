/* globals google */

var React = require('react'),
    ReactDOM = require('react-dom');

var Map = React.createClass({
  componentDidMount: function(){
    this.renderMap(this.props.businesses[0]);
  },

  renderMap: function(business){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: business.lat, lng: business.lng},
      zoom: 16,
      draggable: false,
      scrollwheel: false
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.markers = [];
    this.createMarker(business);
  },

  componentWillReceiveProps: function(newProps){
    this.renderMap(newProps.businesses[0]);
  },

  // Just one marker for current business
  createMarker: function(business){
    var pos = new google.maps.LatLng(business.lat, business.lng);
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      title: business.name,
      businessId: business.id,
      icon: 'assets/purple_pin.png'
    });
    this.markers.push(marker);
  },

  render: function(){
    return (<div ref="map" className={this.props.mapClass}>Map</div>);
  }
});

module.exports = Map;
