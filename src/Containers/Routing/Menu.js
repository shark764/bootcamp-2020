import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Ejemplo</Link>
        </li>
        <li>
          <Link to="/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/lifecycle">Lifecycle</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/api">Fetch data</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
