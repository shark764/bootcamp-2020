import { Box, DataTable, Heading, Text } from 'grommet';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/thunks';

function ReduxToolkitExample() {
  const products = useSelector((state) => state.data.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // effect
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Box>
      <Heading>Hola Toolkit</Heading>

      <DataTable
        columns={[
          { property: 'id', primary: true, header: <Text>Id</Text> },
          { property: 'name', header: <Text>Name</Text> },
          {
            property: 'price',
            header: <Text>Price</Text>,
            render: (row) => {
              return <Text>$ {row.price}</Text>;
            },
          },
        ]}
        data={products}
      />
    </Box>
  );
}

export default ReduxToolkitExample;
