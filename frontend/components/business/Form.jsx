/* globals google */

var React = require('react'),
    ApiUtil = require('../../util/api_util'),
    BusinessStore = require('../../stores/business'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    History = require('react-router').History;

var BusinessForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function(){
    this.geocoder = new google.maps.Geocoder();
    return(
      {
        name: "",
        address: "",
        description: "",
        delivery: null,
        accept_cc: null
      });
  },

  geocode: function(address){
    this.geocoder.geocode({address: address}, function(results, status){
      if (status === google.maps.GeocoderStatus.OK){
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();
        var newAddress = results[0].formatted_address;
        this.createBusiness(lat, lng, newAddress);
      } else {
        alert("Address was not in correct format. Error: " + status);
      }
    }.bind(this));
  },

  submitHandler: function(e){
    e.preventDefault();

    this.geocode(this.state.address);
  },

  createBusiness: function(lat, lng, address){
    ApiUtil.createBusiness({
      name: this.state.name,
      lat: lat,
      lng: lng,
      address: address,
      delivery: this.state.delivery,
      accept_cc: this.state.accept_cc,
      description: this.state.description
    }, this.goToBusiness);

    this.setState(
      {
        name: "",
        address: "",
        description: "",
        delivery: null,
        accept_cc: null
      });
  },

  goToBusiness: function (business) {
    var url = '/businesses/' + business.id;
    this.history.pushState({business: business}, url);
  },

  render: function(){
    return(
      <form onSubmit={this.submitHandler} className="input-group business-form">
        <h3>Submit a Restaurant</h3>
        <label>
          Name:
          <input type="text" className="form-control"
                 valueLink={this.linkState('name')}/>
        </label>
        <br/>
        <label>
          Address:
          <input type="text" className="form-control"
                 valueLink={this.linkState('address')}/>
        </label>
        <br/>
        <label>
          Offers Delivery? (optional)
          <select name="delivery" className="form-control"
                  valueLink={this.linkState('delivery')}>
            <option value={null}>---</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>
        <br/>
        <label>
          Accepts Credit Card? (optional)
          <select name="accept_cc" className="form-control"
                  valueLink={this.linkState('accept_cc')}>
            <option value={null}>---</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>
        <br/>
        <label>
          Hours/Other information:
          <textarea name="description" className="form-control"
                    valueLink={this.linkState('description')}>

          </textarea>
        </label>
        <input type="submit"
               className="form-control purple-button" value="Submit"/>
      </form>
    );
  }
});

module.exports = BusinessForm;
