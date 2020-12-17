import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from './Context';
import Item from './Item';

const USERS = [
  { id: 1, name: 'Gabriel' },
  { id: 2, name: 'Fernando' },
  { id: 3, name: 'Fatima' },
  { id: 4, name: 'Karla' },
  { id: 5, name: 'Roberto' },
  { id: 6, name: 'Alberto' },
  { id: 7, name: 'Gilberto' },
  { id: 8, name: 'Ernesto' },
];

function List({}) {
  const [search, setSearch] = useContext(SearchContext);
  const [users, setUsers] = useState(USERS);

  useEffect(() => {
    // effect
    const filteredUsers = USERS.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
    setUsers(filteredUsers);
    console.log('new users', filteredUsers);

    return () => {
      console.log('Will unmount');
    };
  }, [search]);

  useEffect(() => {
    const time = setTimeout(() => {
      setUsers([...USERS, ...USERS]);
    }, 3000);
    return () => {
      // cleanup
      clearTimeout(time);
      console.log('Will unmount!!!!');
    };
  }, []);

  return (
    <div className="App-users">
      {users.map((user) => {
        return <Item user={user} key={user.id.toString()} />;
      })}
    </div>
  );
}

export default List;
