import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

// routes
import routes from './routes';

/**
  TODO: move all Route tags to ./route.js
*/
render (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/actors" component={Actors} />
      <Route path="/directors" component={Directors} />
    </Route>
  </Router>,
  document.getElementById('root')
);
