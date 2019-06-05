import React from 'react';
import './App.css';
import Weather from './Weather';
import News from './News';
import Poem from './Poem';
import Quote from './Quote';

function App() {
  return (
    <div className="App">
      <Weather />
      <News />
      <Poem />
      <Quote />
    </div>
  );
}

export default App;
