import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-um4b1uxd.us.auth0.com';
const clientId = 'aKUkvIufXnvfP0ssxhK6uEwWW43JsuRY';

function AuthProvider(props) {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {props.children}
    </Auth0Provider>
  );
}

export default AuthProvider;
