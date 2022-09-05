import './App.css';
import React from 'react';
import { Orginals, Action } from './url';
import NavBar from './Component/NavBar/NavBar';
import Banner from './Component/Banner/Banner';
import Rowpost from './Component/Rowpost/Rowpost';

function App() {
  return (

    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Rowpost name="Netflix Originals" type url={Orginals}></Rowpost>
      <Rowpost name="Action Originals" url={Action}></Rowpost>
    </div>
  );
}

export default App;
