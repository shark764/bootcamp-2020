import Axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { UsersContext } from '../Context';
import Row from './Row';
import styled, { css } from 'styled-components';
import { ButtonAdd } from '../../../Components';
import { Box, Button, DataTable, Text, TextInput } from 'grommet';
import {
  Actions,
  FormClose,
  FormEdit,
  Search,
  StatusCritical,
  StatusGood,
  User,
  UserAdd,
  UserFemale,
} from 'grommet-icons';

const token =
  '6cabfd3fc1aa17546fbfac4e0796907906638b74fe780efebf1eb803baa1e31c';

const ButtonAddV2 = styled(ButtonAdd)`
  background-color: transparent;
  font-family: arial;
  border-radius: 8px;
`;

function List() {
  const {
    users: [users, setUsers],
    current: [current, setCurrent],
  } = useContext(UsersContext);
  const [page, setPage] = useState(65);

  const fetchUsers = useCallback(async () => {
    const { data } = await Axios.get(
      `https://gorest.co.in/public-api/users?page=${page}`
    );
    console.log({ data });
    setUsers(data.data);
  }, [page, setUsers]);

  useEffect(() => {
    // effect
    fetchUsers();
  }, [fetchUsers]);

  const deleteUser = async (id) => {
    const response = await Axios.delete(
      `https://gorest.co.in/public-api/users/${id}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('result DELETE', response);
    setUsers(function (currentUsers) {
      return currentUsers.filter((currentUser) => {
        return currentUser.id !== id;
      });
    });
  };

  return (
    <Box pad="medium" elevation="medium" fill gap="small">
      <Box direction="row" gap="medium">
        <TextInput
          type="number"
          value={page}
          onChange={(event) => setPage(parseInt(event.target.value, 10))}
          icon={<Search />}
        />

        <Button
          type="button"
          onClick={() => setCurrent({})}
          label="Add"
          icon={<UserAdd color="brand" />}
          color="accent-1"
        />

        {/* <ButtonAdd
          type="button"
          onClick={() => setCurrent({})}
          btnType={current.id ? 'primary' : 'secondary'}
        >
          + Add
        </ButtonAdd>

        <ButtonAddV2 btnType={current.id ? 'primary' : 'secondary'}>
          - Delete
        </ButtonAddV2> */}
      </Box>

      <DataTable
        columns={[
          { property: 'id', primary: true, header: <Text>Id</Text> },
          { property: 'name', header: <Text>Name</Text> },
          { property: 'email', header: <Text>Email</Text> },
          {
            property: 'gender',
            header: <Text>Gender</Text>,
            render: (row) => {
              return row.gender === 'Male' ? (
                <User color="brand" />
              ) : (
                <UserFemale color="accent-2" />
              );
            },
          },
          {
            property: 'status',
            header: <Text>Status</Text>,
            render: (row) => {
              return row.status === 'Active' ? (
                <StatusGood color="brand" />
              ) : (
                <StatusCritical color="accent-1" />
              );
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
                    onClick={() => deleteUser(row.id)}
                    icon={<FormClose color="accent-2" />}
                    plain
                  />
                </Box>
              );
            },
          },
        ]}
        data={users}
      />
    </Box>
  );
}

export default List;
