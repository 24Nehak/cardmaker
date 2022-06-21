import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import CardContext from './context/cardContext';



function App() {
  return (
    <div className="App">
      <CardContext></CardContext>
      <Home />
    </div>
  );
}

export default App;
