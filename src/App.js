import './App.css';
import React from 'react';
import NavBar from './Component/NavBar/NavBar';
import Banner from './Component/Banner/Banner';
import Rowpost from './Component/Rowpost/Rowpost';

function App() {
  return (
    
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Rowpost></Rowpost>
    </div>
  );
}

export default App;
