import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';

export default function App() {

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

