import Axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { UsersContext } from '../Context';
import Row from './Row';
import styled, { css } from 'styled-components';
import { ButtonAdd } from '../../../Components';

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

  return (
    <div className="App-box">
      <input
        className="pagination-input"
        style={{ color: 'yellowgreen', fontSize: 25 }}
        type="number"
        value={page}
        onChange={(event) => setPage(event.target.value)}
      />

      <ButtonAdd
        type="button"
        onClick={() => setCurrent({})}
        btnType={current.id ? 'primary' : 'secondary'}
      >
        + Add
      </ButtonAdd>

      <ButtonAddV2 btnType={current.id ? 'primary' : 'secondary'}>
        - Delete
      </ButtonAddV2>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            return <Row user={user} key={user.id.toString()} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
