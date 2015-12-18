var React = require('react'),
    ReactDOM = require('react-dom'),
    FilterActions = require('../actions/filter_actions');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var Map = React.createClass({
  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 47.660, lng: -122.3148},
      zoom: 16
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
    this.markers = [];
    this.props.businesses.forEach(this.createMarker);
  },

  registerListeners: function(){
    google.maps.event.addListener(this.map, 'idle', function(){
      var bounds = this.map.getBounds();
      var northEast = _getCoordsObj(bounds.getNorthEast());
      var southWest = _getCoordsObj(bounds.getSouthWest());
      var bounds = {northEast: northEast, southWest: southWest};
      FilterActions.updateBounds(bounds);
    }.bind(this));
  },

  createMarker: function(business){
    var pos = new google.maps.LatLng(business.lat, business.lng)
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      title: business.name,
      businessId: business.id
    });
    this.markers.push(marker);
  },

  removeMarker: function(marker){
    for(var i = 0; i < this.markers.length; i++){
      if (this.markers[i].businessId === marker.businessId){
        this.markers[i].setMap(null);
        this.markers.splice(i, 1);
        break;
      }
    }
  },

  componentDidUpdate: function(oldProps){
    this._onChange();
  },

  _onChange: function(){
    var businesses = this.props.businesses;
    var toAdd = [];
    var toRemove = this.markers.slice(0);
    businesses.forEach(function(business, idx){
      var idx = -1;

      for(var i = 0; i < toRemove.length; i++){
        if(toRemove[i].businessId == business.id){
          idx = i;
          break;
        }
      }

      if (idx === -1) {
        toAdd.push(business);
      } else {
        toRemove.splice(idx, 1);
      }
    });
    toAdd.forEach(this.createMarker);
    toRemove.forEach(this.removeMarker);
  },

  render: function(){
    return (<div ref="map" className={this.props.mapClass}>Map</div>)
  }
});

module.exports = Map;
