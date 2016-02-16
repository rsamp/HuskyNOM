/* globals google */

var React = require('react'),
    ReactDOM = require('react-dom'),
    FilterActions = require('../actions/filter_actions'),
    ApiActions = require('../actions/api_actions'),
    HoverStore = require('../stores/hover'),
    BusinessStore = require('../stores/business');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var Map = React.createClass({
  getInitialState: function(){
    return({businesses: BusinessStore.paginated()});
  },

  _hoverChanged: function(){
    var m = 0;
    while (m < this.markers.length) {
      // this.markers[m].businessId is Number, HoverStore.hoverID
      // is a String, thus == instead of ===
      if (this.markers[m].businessId == HoverStore.hoverID()) {
        this.colorHoveredMarker(this.markers[m]);
      } else {
        this.uncolorHoveredMarker(this.markers[m]);
      }
      m++;
    }
  },

  _pageChanged: function(){
    this.setState({paginatedBusinesses: BusinessStore.paginated()});
    setTimeout(function(){
      this.markers.forEach(this.removeMarker);
      this.state.paginatedBusinesses.forEach(this.createMarker);
    }.bind(this), 10);
  },

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
        center: {lat: 47.660, lng: -122.3148},
        zoom: 15,
        scrollwheel: false
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
    this.markers = [];
    this.state.businesses.forEach(this.createMarker);
    this.pageListener = BusinessStore.addListener(this._pageChanged);
    this.hoverListener = HoverStore.addListener(this._hoverChanged);
    this.hoverID = null;
  },

  // componentWillUnmount: function(){
  //   this.markers.forEach(this.removeMarker);
  // },

  registerListeners: function(){
    google.maps.event.addListener(this.map, 'idle', function(){
      var bounds = this.map.getBounds();
      var northEast = _getCoordsObj(bounds.getNorthEast());
      var southWest = _getCoordsObj(bounds.getSouthWest());
      bounds = {northEast: northEast, southWest: southWest};
      FilterActions.updateBounds(bounds);
    }.bind(this));
  },

  colorHoveredMarker: function(marker){
    marker.setIcon('assets/gold_pin.png');
  },

  uncolorHoveredMarker: function(marker){
    marker.setIcon('assets/purple_pin.png');
  },

  createMarker: function(business){
    var pos = new google.maps.LatLng(business.lat, business.lng);
    var infoWindow = new google.maps.InfoWindow({
      content: business.name,
    });
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      title: business.name,
      businessId: business.id,
      icon: 'assets/purple_pin.png'
    });
    marker.addListener('click', function(){
      infoWindow.open(this.map, marker);
    });
    // marker.addListener("mouseover", function(){
    //   ApiActions.handleMarkerHover(marker.businessId);
    // });
    // marker.addListener("mouseout", function(){
    //   ApiActions.handleLeave();
    // });
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
      idx = -1;

      for(var i = 0; i < toRemove.length; i++){
        if(toRemove[i].businessId === business.id){
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
    return (<div ref="map" className={this.props.mapClass}>Map</div>);
  }
});

module.exports = Map;
