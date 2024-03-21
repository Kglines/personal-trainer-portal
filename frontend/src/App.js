import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import * as sessionActions from './store/session';
import Home from './pages/Home';
import NavBar from './components/UI/NavBar';
import SignupForm from './components/SignupForm';
import Landing from './pages/Landing';
import Clients from './pages/Clients';
import Trainers from './pages/Trainers';
import Machines from './pages/Machines';
import Machine from './pages/Machine';
import AllMachines from './pages/AllMachines';
import Announcement from './pages/Announcement';
import Client from './pages/Client'
import Error from './components/UI/Error';
import Problems from './pages/Problems';
import Profile from './pages/Profile';
import Trainer from './pages/Trainer';
import Chat from './pages/Chat';
import Dashboard from './pages/Dashboard';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <React.Fragment>
      <NavBar isLoaded={isLoaded} />
      {isLoaded ? (
        <Routes>
          <Route path='/signup' element={<SignupForm />} exact />
          <Route path='/login' element={<Login />} exact />
          <Route
            path='/home'
            element={<Home />}
            exact
          />
          <Route
            path='/announcements/:announcementId'
            element={<Announcement />}
            exact
          />
          <Route path='/clients' element={<Clients />} exact />
          <Route
            path='/clients/:clientId'
            element={<Client />}
            errorElement={<Error />}
            exact
          />
          <Route path='/trainers' element={<Trainers />} exact />
          <Route path='trainers/:trainerId' element={<Trainer />} exact />
          <Route path='/machines' element={<Machines />} exact />
          <Route path='/machines/:machineId' element={<Machine />} exact />
          <Route path='/allmachines' element={<AllMachines />} exact />
          <Route path='/problems' element={<Problems />} exact />
          <Route path='/profile' element={<Profile />} exact />
          <Route path='/chat' element={<Chat />} />
          <Route path='/' element={<Landing />} exact />
          <Route path='/dashboard' element={<Dashboard />} exact />
          <Route>:Page Not Found</Route>
        </Routes>
      ) : (
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      )}
    </React.Fragment>
  );
}

export default App;
