import Axios from 'axios';
import { Box } from 'grommet';
import React, { useContext } from 'react';
import { UsersContext } from '../Context';
import FormLayout from './FormGrommet';

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

  const a = { data: 1, code: 2 };
  const b = { res: 'hola', code: 200 };
  const merged = { ...a, ...b };
  console.log({ merged });

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
    <Box pad="medium" elevation="medium" gap="small" width="large">
      <FormLayout
        onSubmit={onSubmit}
        key={current.id}
        currentValues={current}
      />
    </Box>
  );
}

export default Form;
