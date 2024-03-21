import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import '../../index.css';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  const logout = (e) => {
    e.preventDefault();
    navigate('/login');
    dispatch(sessionActions.logout());
  };

  const ulClassName =
    'profile-dropdown' +
    (showMenu
      ? ' p-2 gap-2 bg-dark text-white rounded-md absolute right-12 md:right-32 top-12'
      : ' hidden');

  return (
    <>
      <button 
        // onClick={openMenu}
        onClick={() => navigate('/profile')}
        >
        {user.profileImg ? (
          <img
            src={user.profileImg}
            alt='profile'
            className='w-9 h-9 rounded-full flex mx-4'
          />
        ) : (
          <i className='fas fa-user-circle mx-8' />
        )}
      </button>
      {showMenu && (
        <ul className={ulClassName}>
          
            <Link to='/profile' className='text-primary' onClick={() => setShowMenu(false)}>
              Edit Profile
            </Link>
          
          <li className='py-2'>
            <strong>Username: </strong> {user.username}
          </li>
          <li className='py-2'>
            <strong>Name: </strong> {user.firstName} {user.lastName}
          </li>
          <li className='py-2'>
            <strong>Email: </strong> {user.email}
          </li>
          <li className='py-2'>
            <strong>Messages: </strong>1 New Message
          </li>
          <li className='flex justify-center py-2 text-center'>
            <button
              onClick={logout}
              className='flex gap-2 bg-secondary text-white rounded-sm px-2 py-1 items-center'
            >
              <HiOutlineArrowRightOnRectangle className='text-2xl' />
              <p className='flex'>Log Out</p>
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
