import React from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/home'

export const var1 = 4;

const App = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;
