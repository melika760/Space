
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Destination from './pages/Destination';
import { Fragment } from 'react';


function App() {

  return (<Fragment>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destination' element={<Destination/>}/>
    </Routes>
    </Fragment>
  );
}

export default App;
