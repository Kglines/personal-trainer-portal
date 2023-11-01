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
            exact="true"
            to='/home'
            className='text-white hover:text-secondary hover:underline focus:text-secondary focus:underline'
          >
            Home
          </NavLink>
          <NavLink
            exact="true"
            to='/clients'
            className='text-white hover:text-secondary hover:underline active:text-secondary active:underline focus:text-secondary focus:underline'
          >
            Clients
          </NavLink>
          <NavLink
            exact="true"
            to='/maintenance'
            className='text-white hover:text-secondary hover:underline active:text-secondary active:underline focus:text-secondary focus:underline'
          >
            Maintenance
          </NavLink>
          {sessionUser.isAdmin && <NavLink
            exact="true"
            to='/trainers'
            className='text-white hover:text-secondary hover:underline active:text-secondary active:underline focus:text-secondary focus:underline'
          >
            Trainers
          </NavLink>}
        </li>
        <li className='text-white'>
          <ProfileButton user={sessionUser} />
          <button
            onClick={logout}
            className='bg-secondary rounded px-2 align-top mt-1'
          >
            Log Out
          </button>
        </li>
      </ul>
    );
  } else {
    sessionLinks = (
      <>
        <li className='flex gap-4'>
          <NavLink
            exact
            to='/'
            className='text-white hover:text-secondary hover:underline'
          >
            Home
          </NavLink>
        </li>
        <li className='flex gap-4 justify-between'>
          <NavLink
            to='/login'
            className='text-white border border-secondary rounded-sm px-2 hover:bg-secondary focus:bg-secondary'
          >
            Log In
          </NavLink>
          <NavLink
            to='/signup'
            className='text-white border border-secondary rounded-sm px-2 hover:bg-secondary focus:bg-secondary'
          >
            Sign Up
          </NavLink>
        </li>
      </>
    );
  }

  return (
    <nav className='flex h-12 w-full bg-primary py-2 text-lg'>
    <div className="w-4/5 mx-auto">
      <ul className='flex flex-1 justify-between'>
        {isLoaded && sessionLinks}
      </ul>
    </div>
    </nav>
  );
}

export default Navigation;
