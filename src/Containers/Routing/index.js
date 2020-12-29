import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import APIFetching from '../APIFetching';
import ContentfulExample from '../ContentfulExample';
import Example1 from '../ExampleJSX';
import Example from '../ExampleJSX/Example';
import Lifecycle from '../Lifecycle';
import ReactQueryExample from '../ReactQueryExample';
import ReduxToolkitExample from '../ReduxToolkitExample';
import UsersExample from '../UsersExample';
import Menu from './Menu';

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
      <Route path="/api">
        <APIFetching />
      </Route>
      <Route path="/toolkit">
        <ReduxToolkitExample />
      </Route>
      <Route path="/rquery">
        <ReactQueryExample />
      </Route>
      <Route path="/contentful">
        <ContentfulExample />
      </Route>
    </Switch>
  );
}

export default Routing;
