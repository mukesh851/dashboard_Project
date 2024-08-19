import React from 'react';
import Dashboard from './components/Dashboard';
import { StoreProvider } from './store/store';
import './App.css';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Dashboard />
      </div>
    </StoreProvider>
    
  );
}

export default App;
