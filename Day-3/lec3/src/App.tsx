import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/stopwatch/Stopwatch';
import Stopwatch2 from './components/stopwatch/Stopwatch2';
import FetchData from './components/GetData/FetchData';

function App() {
  return (
    <div className="App">
     {/* <Stopwatch/>
     <Stopwatch2/> */}


     <FetchData/>
    </div>
  );
}

export default App;
