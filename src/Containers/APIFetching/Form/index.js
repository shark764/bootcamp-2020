import Axios from 'axios';
import React, { useContext } from 'react';
import { UsersContext } from '../Context';
import FormLayout from './FormLayout';

const token =
  '6cabfd3fc1aa17546fbfac4e0796907906638b74fe780efebf1eb803baa1e31c';

function Form() {
  const {
    users: [, setUsers],
    current: [current],
  } = useContext(UsersContext);

  const isAddMode = !current.id;

  const postUser = async (payload) => {
    const response = await Axios.post(
      'https://gorest.co.in/public-api/users',
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('result POST', response.data.data);
    setUsers((currentList) => {
      return [...currentList, response.data.data];
    });
  };

  const putUser = async (payload) => {
    const response = await Axios.put(
      `https://gorest.co.in/public-api/users/${current.id}`,
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('result PUT', response.data.data);
    setUsers(function (currentUsers) {
      return currentUsers.map((user) => {
        if (user.id === response.data.data.id) {
          return {
            ...user,
            ...response.data.data,
          };
        }
        return user;
      });
    });
  };

  const onSubmit = (values) => {
    const payload = {
      ...values,
      status: values.status ? 'Active' : 'Inactive',
    };

    console.log({ values, payload, isAddMode });

    if (isAddMode) {
      postUser(payload);
    } else {
      putUser(payload);
    }
  };

  return (
    <div className="App-box">
      <FormLayout
        onSubmit={onSubmit}
        key={current.id}
        currentValues={current}
      />
    </div>
  );
}

export default Form;
