import { Box, Button, Heading } from 'grommet';
import { Power } from 'grommet-icons';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box>
      <Heading level="2">Entra a mi web app</Heading>

      <Button
        icon={<Power />}
        label="Log In"
        onClick={() => loginWithRedirect()}
      />
    </Box>
  );
}

export default Login;
