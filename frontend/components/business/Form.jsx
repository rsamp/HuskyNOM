var React = require('react'),
    ApiUtil = require('../../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var BusinessForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    this.geocoder = new google.maps.Geocoder();
    return({name: "", address: "", hours: "", delivery: null, accept_cc: null});
  },

  geocode: function(address){
    this.geocoder.geocode({address: address}, function(results, status){
      if (status === google.maps.GeocoderStatus.OK){
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();
        var latLng = {lat: lat, lng: lng};
        this.createBusiness(latLng);
      } else {
        alert("Address was not in correct format " + status);
      }
    }.bind(this));
  },

  submitHandler: function(e){
    e.preventDefault();

    this.geocode(this.state.address);
  },

  createBusiness: function(latLng){
    ApiUtil.createBusiness({
      name: this.state.name,
      lat: latLng.lat,
      lng: latLng.lng,
      address: this.state.address,
      delivery: this.state.delivery,
      accept_cc: this.state.accept_cc
    });
  },

  render: function(){
    return(
      <form onSubmit={this.submitHandler}>
        <label>
          Name:
          <input type="text" valueLink={this.linkState('name')}/>
        </label>
        <br/>
        <label>
          Address:
          <input type="text" valueLink={this.linkState('address')}/>
        </label>
        <br/>
        <label>
          Offers Delivery? (optional)
          <select name="delivery" valueLink={this.linkState('delivery')}>
            <option value={null}>---</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>
        <br/>
        <label>
          Accepts Credit Card? (optional)
          <select name="accept_cc" valueLink={this.linkState('accept_cc')}>
            <option value={null}>---</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
});

module.exports = BusinessForm;

// <label>
//   Hours (optional)
//   <br/>
//   Sunday:
//   <input type="text"/>
//   <br/>
//   Monday:
//   <input type="text"/>
//   <br/>
//   Tuesday:
//   <input type="text"/>
//   <br/>
//   Wednesday:
//   <input type="text"/>
//   <br/>
//   Thursday:
//   <input type="text"/>
//   <br/>
//   Friday:
//   <input type="text"/>
//   <br/>
//   Saturday:
//   <input type="text"/>
// </label>
// <br/>