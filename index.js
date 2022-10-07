import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './Hello';
import './style.css';

function App() {

  return (
    <div>
      <Hello />
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App tab="home" />);