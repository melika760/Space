
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Destination from './pages/Destination';
import { Fragment } from 'react';
import Crew from './pages/Crew';


function App() {

  return (<Fragment>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/crew' element={<Crew/>}/>
    </Routes>
    </Fragment>
  );
}

export default App;
