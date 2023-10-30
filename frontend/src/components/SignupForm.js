import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as sessionActions from '../store/session';

function SignupForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sessionUser = useSelector((state) => state.session.user);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if(sessionUser){
      navigate("/home");
    } else {
      navigate("/signup");
    }
  }, [navigate, sessionUser])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
    }
    return setErrors({
      confirmPassword:
        'Confirm Password field must be the same as the Password field',
    });
  };

  return (
    <div className='border border-white w-2/5 rounded-sm mx-auto my-8 bg-dark'>
      <h1 className='text-center text-3xl py-12 text-white'>Sign Up</h1>
      <section className='flex flex-col mx-auto w-3/4 text-white justify-end text-right'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col justify-end text-right'
        >
          <label className='flex gap-4 justify-end py-2 h-12'>
            First Name
            <input
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className='w-64 p-2'
            />
          </label>
          {errors.firstName && <p>{errors.firstName}</p>}
          <label className='flex gap-4 justify-end py-2 h-12'>
            Last Name
            <input
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className='w-64 p-2'
            />
          </label>
          {errors.lastName && <p>{errors.lastName}</p>}

          <label className='flex gap-4 justify-end py-2 h-12'>
            Username
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className='w-64 p-2'
            />
          </label>
          {errors.username && <p>{errors.username}</p>}
          <label className='flex gap-4 justify-end py-2 h-12'>
            Email
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-64 p-2'
            />
          </label>
          {errors.email && <p>{errors.email}</p>}

          <label className='flex gap-4 justify-end py-2 h-12'>
            Password
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-64 p-2'
            />
          </label>
          {errors.password && <p>{errors.password}</p>}
          <label className='flex gap-4 justify-end py-2 h-12'>
            Confirm Password
            <input
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className='w-64 p-2'
            />
          </label>
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          <button
            type='submit'
            className='bg-secondary w-24 mx-auto my-4 h-12 hover:bg-secondaryLight'
          >
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
}

export default SignupForm;
