import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import View from './components/View';
import './App.css';
import Add from './components/Add';
import { Demoaxios } from './components/Demoaxios';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome To Product Management Application</h1>
      <View />
      <br />
      <Routes>
        <Route path="/" element={<Demoaxios />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
