var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Business = require('./components/business/Business');


var App = React.createClass({
  render: function(){
    return(
      <div>
        <header><h1>HuskyNOM</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <Route path="business/:id" component={Business}/>
  </Route>
);


$(function(){
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root);
})
