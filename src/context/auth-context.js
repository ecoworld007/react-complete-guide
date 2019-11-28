import React from 'react';

const authContext = React.createContext({
  login: () => {},
  authenticated: false
})

export default authContext;