import React from 'react';
import { Box, Button, DataTable, Text } from 'grommet';
import { Actions, FormClose, FormEdit } from 'grommet-icons';
import { DateTime } from 'luxon';

function Table({ movies, setCurrent, deleteMovie }) {
  return (
    <DataTable
      columns={[
        { property: 'id', primary: true, header: <Text>Id</Text> },
        { property: 'title', header: <Text>Title</Text> },
        { property: 'directedBy', header: <Text>Directed by</Text> },
        { property: 'distributedBy', header: <Text>Distributed by</Text> },
        {
          property: 'budget',
          header: <Text>Budget</Text>,
          render: (row) => {
            return <Text color="brand">$ {row.budget}</Text>;
          },
        },
        {
          property: 'boxOffice',
          header: <Text>Box office</Text>,
          render: (row) => {
            return (
              <Text
                color={row.boxOffice > row.budget ? 'brand' : 'status-critical'}
              >
                $ {row.boxOffice}
              </Text>
            );
          },
        },
        {
          property: 'releaseDate',
          header: <Text>Release date</Text>,
          render: (row) => {
            return DateTime.fromISO(row.releaseDate).toLocaleString(
              DateTime.DATE_FULL
            );
          },
        },
        {
          property: 'runningTime',
          header: <Text>Running time</Text>,
          render: (row) => {
            return `${row.runningTime}min`;
          },
        },
        {
          property: 'actions',
          header: <Actions />,
          render: (row) => {
            return (
              <Box direction="row">
                <Button
                  type="button"
                  onClick={() => setCurrent(row)}
                  icon={<FormEdit color="brand" />}
                  plain
                />
                <Button
                  type="button"
                  onClick={() => deleteMovie(row.id)}
                  icon={<FormClose color="accent-2" />}
                  plain
                />
              </Box>
            );
          },
        },
      ]}
      data={movies}
    />
  );
}

export default Table;
