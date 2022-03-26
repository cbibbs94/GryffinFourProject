import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import MadlibHome from './components/MadlibHome';
import React, { Component }  from 'react';

function App() {
  const [value, setValue] = useState('')

  useEffect(() => {
    fetch('/')
      .then((res) => res.json())
      .then((data) => {
        setValue(data.message)
      })
  }, [])

  return (
    <div className="App">
      <h1>WELCOME TO MADLIB MADNESS</h1>
      {value}
      
      <MadlibHome />
    </div>
  );
}

export default App;
