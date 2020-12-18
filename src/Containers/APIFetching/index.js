import React from 'react';
import UsersProvider from './Context';
import Form from './Form';
import List from './List';

function APIFetching() {
  return (
    <div className="App-form-users">
      <UsersProvider>
        <List />
        <Form />
      </UsersProvider>
    </div>
  );
}

export default APIFetching;
