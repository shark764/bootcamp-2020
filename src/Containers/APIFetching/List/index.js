import Axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { UsersContext } from '../Context';
import Row from './Row';

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

  return (
    <div className="App-box">
      <input
        type="number"
        value={page}
        onChange={(event) => setPage(event.target.value)}
      />

      <button type="button" onClick={() => setCurrent({})}>
        + Add
      </button>

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
