import Axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { UsersContext } from '../Context';
import { Box, Button, TextInput } from 'grommet';
import { Search, UserAdd } from 'grommet-icons';
import ListGrommet from './ListGrommet';
import { gorestToken } from '../../../utils';

function List() {
  const {
    users: [users, setUsers],
    current: [, setCurrent],
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
          Authorization: `Bearer ${gorestToken}`,
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

      <ListGrommet
        users={users}
        setCurrent={setCurrent}
        deleteUser={deleteUser}
      />
    </Box>
  );
}

export default List;
