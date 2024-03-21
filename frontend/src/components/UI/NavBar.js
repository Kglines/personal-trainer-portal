// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import { HiOutlineHome } from 'react-icons/hi2';
import { HiOutlineUsers } from 'react-icons/hi2';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { HiOutlineScale } from 'react-icons/hi2';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';


function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  console.log('sessionUser === ', sessionUser)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    navigate('/login');
    dispatch(sessionActions.logout());
  };
  

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <nav className='w-full'>
        <ul className='flex sm:justify-between'>
          <li className='flex divide divide-x-2 pl-2 gap-4'>
            <NavLink
              exact='true'
              to='/dashboard'
              className='flex gap-2 pl-4 text-white hover:text-light transition-colors active:text-light'
            >
              <HiOutlineHome className='text-xl mt-1' />
              <p className='hidden md:flex'>Dashboard</p>
            </NavLink>
            <NavLink
              exact='true'
              to='/clients'
              className='flex gap-2 pl-4 text-white hover:text-light transition-colors active:text-light'
            >
              <HiOutlineUsers className='text-xl mt-1' />
              <p className='hidden md:flex'>Clients</p>
            </NavLink>
            <NavLink
              exact='true'
              to='/machines'
              className='flex gap-2 pl-4 text-white hover:text-light  active:text-light transition-colors'
            >
              <HiOutlineWrenchScrewdriver className='text-xl mt-1' />
              <p className='hidden md:flex'>Machines</p>
            </NavLink>
            {sessionUser.role === 'admin' && (
              <NavLink
                exact='true'
                to='/trainers'
                className='flex gap-2 pl-4 text-white hover:text-light transition-colors active:text-light'
                >
                <HiOutlineScale className='text-xl mt-1' />
                <p className='hidden md:flex'>Trainers</p>
              </NavLink>
            )}
          </li>
          <li className='text-white flex items-center gap-2'>
            <ProfileButton user={sessionUser} />
            <button
              onClick={logout}
              className='hidden sm:flex sm:bg-secondary rounded px-2 align-top gap-2 items-center'
            >
              <HiOutlineArrowRightOnRectangle className='text-2xl' />
              <p className='hidden lg:flex'>Log Out</p>
            </button>
          </li>
        </ul>
      </nav>
    );
  } else {
    sessionLinks = (
      <nav className='flex justify-between'>
        <li className='flex gap-4'>
          <NavLink
            exact
            to='/'
            className='text-white hover:text-light'
          >
            Home
          </NavLink>
        </li>
        <li className='flex gap-4 justify-between'>
          <NavLink
            to='/login'
            className='flex gap-2 pl-4 text-white hover:text-light transition-colors active:text-light'
            >
            Log In
          </NavLink>
        </li>
      </nav>
    );
  }

  return (
    <nav
      id='nav'
      className='md:flex h-12 w-full bg-gradient-to-b from-primary to-black py-2 text-lg'
    >
      <div className='w-4/5 mx-auto'>
        <ul>{isLoaded && sessionLinks}</ul>
      </div>
    </nav>
  );
}

export default Navigation;
