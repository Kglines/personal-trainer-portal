import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import * as sessionActions from './store/session';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import SignupForm from './components/SignupForm';
import Landing from './pages/Landing';

function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <React.Fragment>
      <NavBar isLoaded={isLoaded} />
      {isLoaded && (
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      )}
    </React.Fragment>
  );
}

export default App;
