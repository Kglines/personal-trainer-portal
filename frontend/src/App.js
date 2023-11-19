import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import * as sessionActions from './store/session';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import SignupForm from './components/SignupForm';
import Landing from './pages/Landing';
import Clients from './pages/Clients';
import Trainers from './pages/Trainers';
import LeftBar from './components/LeftBar';
import Machines from './pages/Machines';
import Machine from './pages/Machine';
import AllMachines from './pages/AllMachines';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <React.Fragment>
      <NavBar isLoaded={isLoaded} />
      {isLoaded && (
        <Routes>
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/trainers' element={<Trainers />} />
          <Route path='/machines' element={<Machines />} />
          <Route path='/machines/:machineId' element={<Machine />} />
          <Route path='/allmachines' element={<AllMachines />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      )}
    </React.Fragment>
  );
}

export default App;
