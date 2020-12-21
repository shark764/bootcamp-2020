import { Box } from 'grommet';
import React from 'react';
import UsersProvider from './Context';
import Form from './Form';
import List from './List';

function APIFetching() {
  return (
    <UsersProvider>
      <Box direction="row" pad="medium" gap="medium">
        <List />
        <Form />
      </Box>
    </UsersProvider>
  );
}

export default APIFetching;
