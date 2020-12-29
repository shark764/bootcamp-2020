import { Box } from 'grommet';
import React from 'react';
import Form from './Form';
import List from './List';

function ContentfulExample() {
  return (
    <Box direction="row" pad="medium" gap="medium">
      <List />
      <Form />
    </Box>
  );
}

export default ContentfulExample;
