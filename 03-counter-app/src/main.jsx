import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorldApp';
import CounterApp from './CounterApp';
import './/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld/>
    <CounterApp/>
  </React.StrictMode>
);
