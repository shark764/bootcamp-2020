import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../auth0/Login';
import APIFetching from '../APIFetching';
import ContentfulExample from '../ContentfulExample';
import ContentfulMoviesExample from '../ContentfulMoviesExample';
import Example1 from '../ExampleJSX';
import Example from '../ExampleJSX/Example';
import Lifecycle from '../Lifecycle';
import ReactQueryExample from '../ReactQueryExample';
import ReduxToolkitExample from '../ReduxToolkitExample';
import UsersExample from '../UsersExample';
import PrivateRoute from './PrivateRoute';

function Routing() {
  return (
    <Switch>
      <Route exact path="/">
        <Example />
      </Route>
      <Route path="/jsx">
        <Example1 />
      </Route>
      <Route path="/lifecycle">
        <Lifecycle />
      </Route>
      <Route path="/users">
        <UsersExample />
      </Route>
      <PrivateRoute path="/api">
        <APIFetching />
      </PrivateRoute>
      <PrivateRoute path="/toolkit">
        <ReduxToolkitExample />
      </PrivateRoute>
      <PrivateRoute path="/rquery">
        <ReactQueryExample />
      </PrivateRoute>
      <PrivateRoute path="/contentful">
        <ContentfulExample />
      </PrivateRoute>
      <PrivateRoute path="/movies">
        <ContentfulMoviesExample />
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default Routing;
