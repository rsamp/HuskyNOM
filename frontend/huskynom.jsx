var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Index = require('./components/Index'),
    BusinessIndex = require('./components/business/Index'),
    BusinessShow = require('./components/business/Business');


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
    <IndexRoute component={Index}/>
    <Route path="businesses" component={BusinessIndex}/>
    <Route path="businesses/:id" component={BusinessShow}/>
  </Route>
);


$(function(){
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root);
})
