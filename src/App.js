import React from 'react';
import Routes from './routes';

import ContextProvider from './context';

import './reset.css';

function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}

export default App;
