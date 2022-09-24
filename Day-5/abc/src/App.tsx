import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeOutPage from './components/TimeOutPage';
import Fetching from './components/Fetching';
// import Form from './components/Form';

function App() {
  return (
    <div className="App">
     <TimeOutPage/>
     <Fetching/>
     {/* <Form/> */}
    </div>
  );
}

export default App;
