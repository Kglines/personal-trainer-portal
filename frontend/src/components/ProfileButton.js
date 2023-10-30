import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as sessionActions from '../store/session';
import '../index.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  // const ulRef = useRef();

  const openMenu = () => {
    // if (showMenu) return;
    setShowMenu(!showMenu);
    // console.log('openMenu **** ', showMenu);
  };

  // useEffect(() => {
  //   if (!showMenu) return;
  //   console.log('closeMenu **** ', showMenu);

  //   const closeMenu = () => {
  //     setShowMenu(false);
  //     // if (!ulRef.current.contains(e.target)) {
  //     //   setShowMenu(false);
  //     // }
  //   };

  //   document.addEventListener('click', closeMenu);

  //   return () => document.removeEventListener('click', closeMenu);
  // }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    navigate('/');
  };

  const ulClassName =
    'profile-dropdown' +
    (showMenu
      ? ' p-2 gap-2 bg-dark text-white rounded-md absolute right-32 top-12'
      : ' hidden');

  return (
    <>
      <button onClick={openMenu}>
        {user.profileImg ? <img src={user.profileImg} alt='profile' className='w-8 h-8 rounded-full flex mx-4 mt-1' /> : <i className='fas fa-user-circle mx-8' />
        }
        {/* <i className='fas fa-user-circle mx-8' /> */}
      </button>
      {showMenu && (
        <ul
          className={ulClassName}
          // className='profile-dropdown'
          // ref={ulRef}
        >
          <li className='py-2'>
            <strong>Username: </strong> {user.username}
          </li>
          <li className='py-2'>
            <strong>Name: </strong> {user.firstName} {user.lastName}
          </li>
          <li className='py-2'><strong>Email: </strong> {user.email}</li>
          <li className='py-2 text-center'>
            <button
              onClick={logout}
              className='bg-secondary text-white rounded-sm px-2'
            >
              Log Out
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
