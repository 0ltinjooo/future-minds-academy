import React from 'react';
import Messages from './Messages';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Olti";
  if(name)
    return <h2>Welcome {name}!</h2>;
  else
  return <h2>Welcome to React JS</h2>
}

export default App;
