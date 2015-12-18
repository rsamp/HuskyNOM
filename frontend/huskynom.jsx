var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Navbar = require('./components/Navbar'),
    Search = require('./components/Search'),
    BusinessIndex = require('./components/business/Index'),
    BusinessShow = require('./components/business/Show');

var App = React.createClass({
  render: function(){
    return(
      <div>
        <Navbar/>
        <div className="body">
          {this.props.children}
        </div>
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}/>
    <Route path="businesses" component={BusinessIndex}/>
    <Route path="businesses/:id" component={BusinessShow}/>
  </Route>
);


$(function(){
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
