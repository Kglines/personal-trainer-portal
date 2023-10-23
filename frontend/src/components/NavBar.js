// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../store/session';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    navigate('/');
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ul className='flex flex-1 justify-between'>
        <li className='flex gap-4'>
          <NavLink
            exact
            to='/home'
            className='text-white hover:text-secondary hover:underline'
          >
            Home
          </NavLink>
          <NavLink
            exact
            to='/clients'
            className='text-white hover:text-secondary hover:underline'
          >
            Clients
          </NavLink>
          <NavLink
            exact
            to='/maintenance'
            className='text-white hover:text-secondary hover:underline'
          >
            Maintenance
          </NavLink>
        </li>
        <li className='text-white'>
          <ProfileButton user={sessionUser} />
          <button onClick={logout} className='bg-secondary rounded px-2'>
            Log Out
          </button>
        </li>
      </ul>
    );
  } else {
    sessionLinks = (
      <li className='flex gap-4 justify-between'>
        <NavLink to='/login' className='text-white border border-secondary rounded-sm px-2 hover:bg-secondary'>
          Log In
        </NavLink>
        <NavLink to='/signup' className='text-white border border-secondary rounded-sm px-2 hover:bg-secondary'>
          Sign Up
        </NavLink>
      </li>
    );
  }

  return (
    <nav className='flex h-18 w-full bg-primary px-24 py-4'>
      <ul className='flex flex-1 justify-between'>
        <li className='flex gap-4'>
          
        </li>
        {isLoaded && sessionLinks}
      </ul>
    </nav>
  );
}

export default Navigation;
