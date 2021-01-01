import React from 'react';
import { Avatar, Box, Button, Header, Nav, Select, Text } from 'grommet';
import {
  CloudSoftware,
  DocumentStore,
  GraphQl,
  Group,
  Login,
  Logout,
  Multimedia,
  Reactjs,
  Tools,
} from 'grommet-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { setNewTheme } from '../../redux/actions';
import { themes } from '../../utils';

const publicLinks = [
  { label: 'Example', to: '/', icon: <Reactjs color="accent-2" /> },
  { label: 'JSX', to: '/jsx', icon: <Reactjs color="accent-2" /> },
  { label: 'Lifecycle', to: '/lifecycle', icon: <Reactjs color="accent-2" /> },
  { label: 'Users', to: '/users', icon: <Group color="accent-2" /> },
];
const privateLinks = [
  { label: 'Fetch Data', to: '/api', icon: <DocumentStore color="accent-2" /> },
  { label: 'Redux Toolkit', to: '/toolkit', icon: <Tools color="accent-2" /> },
  { label: 'React Query', to: '/rquery', icon: <GraphQl color="accent-2" /> },
  {
    label: 'Contentful',
    to: '/contentful',
    icon: <CloudSoftware color="accent-2" />,
  },
  { label: 'Movies', to: '/movies', icon: <Multimedia color="accent-2" /> },
];

function PageHeader(props) {
  const { isAuthenticated, isLoading, logout, user } = useAuth0();

  const location = useLocation();
  console.log({ location });
  console.log('props con redux', props);

  const history = useHistory();

  if (isLoading) {
    return null;
  }

  let links = [...publicLinks];
  if (isAuthenticated) {
    links = [...publicLinks, ...privateLinks];
  }

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

      <Box justify="end" direction="row">
        <Select
          value={props.theme}
          options={Object.keys(themes)}
          onChange={({ option }) => props.setNewTheme(option)}
        />

        {isAuthenticated && <Avatar src={user.picture} title={user.name} />}

        {isAuthenticated ? (
          <Button
            type="button"
            icon={<Logout />}
            label="Log Out"
            onClick={() => logout({ returnTo: window.location.origin })}
          />
        ) : (
          <Button
            type="button"
            onClick={() => history.push('/login')}
            icon={<Login />}
            label="Log In"
          />
        )}
      </Box>
    </Header>
  );
}

const mapStateToProps = (state) => ({
  theme: state.main.theme,
});

const mapDispatchToProps = {
  setNewTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
