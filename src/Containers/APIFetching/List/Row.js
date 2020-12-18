import Axios from 'axios';
import React, { useContext } from 'react';
import { UsersContext } from '../Context';

const token =
  '6cabfd3fc1aa17546fbfac4e0796907906638b74fe780efebf1eb803baa1e31c';

function Row({ user }) {
  const {
    users: [, setUsers],
    current: [, setCurrent],
  } = useContext(UsersContext);

  const deleteUser = async () => {
    const response = await Axios.delete(
      `https://gorest.co.in/public-api/users/${user.id}`,
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
        return currentUser.id !== user.id;
      });
    });
  };

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td>{user.status}</td>
      <td>
        <button onClick={() => setCurrent(user)}>E</button>
        <button onClick={() => deleteUser()}>X</button>
      </td>
    </tr>
  );
}

export default Row;
