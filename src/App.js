
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import { Fragment } from 'react';
import Crew from './pages/Crew';
import Technology from './pages/Technology';


function App() {

  return (<Fragment>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/crew' element={<Crew/>}/>
      <Route path='/technology' element={<Technology/>}/>
    </Routes>
    </Fragment>
  );
}

export default App;
