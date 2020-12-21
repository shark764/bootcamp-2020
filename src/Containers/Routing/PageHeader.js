import React from 'react';
import { Header, Nav, Text } from 'grommet';
import { DocumentStore, Group, Reactjs } from 'grommet-icons';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Example', to: '/', icon: <Reactjs color="accent-2" /> },
  { label: 'JSX', to: '/jsx', icon: <Reactjs color="accent-2" /> },
  { label: 'Lifecycle', to: '/lifecycle', icon: <Reactjs color="accent-2" /> },
  { label: 'Users', to: '/users', icon: <Group color="accent-2" /> },
  { label: 'Fetch Data', to: '/api', icon: <DocumentStore color="accent-2" /> },
];

function PageHeader(props) {
  const location = useLocation();
  console.log({ location });
  console.log(props);

  return (
    <Header background="brand" pad="medium">
      <Nav direction="row">
        {links.map((link) => {
          return (
            <Link to={link.to} key={link.to}>
              {link.icon}
              {` `}
              <Text
                color={link.to === location.pathname ? 'accent-2' : 'accent-3'}
              >
                {link.label}
              </Text>
            </Link>
          );
        })}
      </Nav>
    </Header>
  );
}

export default PageHeader;
