// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import ProfileButton from './ProfileButton';
import * as sessionActions from '../store/session';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <li className='text-white flex justify-around'>
        {/* <ProfileButton user={sessionUser} /> */}
        <button onClick={logout} className='text-white'>
          Log Out
        </button>
      </li>
    );
  } else {
    sessionLinks = (
      <li>
        <NavLink to='/login' className='text-white'>
          Log In
        </NavLink>
        <NavLink to='/signup' className='text-white'>
          Sign Up
        </NavLink>
      </li>
    );
  }

  return (
    <nav className='h-8 w-full bg-black'>
      <ul>
        <li>
          <NavLink exact to='/' className='text-white'>
            Home
          </NavLink>
        </li>
        {isLoaded && sessionLinks}
      </ul>
    </nav>
  );
}

export default Navigation;
