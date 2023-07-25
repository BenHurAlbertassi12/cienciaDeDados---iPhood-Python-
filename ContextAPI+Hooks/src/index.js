import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './templates/Home/Home';
import { CounterContextProvider } from './context/CounterContext/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
);
