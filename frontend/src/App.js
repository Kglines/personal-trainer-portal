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
import Machines from './pages/Machines';
import Machine from './pages/Machine';
import AllMachines from './pages/AllMachines';
import Announcement from './pages/Announcement';
import Client from './pages/Client'
import Error from './components/Error';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  // useEffect(() => {
  //   if(!sessionUser || sessionUser === undefined) {
  //     return <LoginForm />
  //   } 
  // }, [sessionUser])

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
          <Route path='/machines' element={<Machines />} exact />
          <Route path='/machines/:machineId' element={<Machine />} exact />
          <Route path='/allmachines' element={<AllMachines />} exact />
          <Route path='/' element={<Landing />} exact />
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
