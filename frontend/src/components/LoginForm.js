import React, { useEffect, useState } from 'react';
import * as sessionActions from '../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!sessionUser || sessionUser.username === null) {
      return navigate('/login');
    } else {
      return navigate('/home');
    }
  }, [navigate, sessionUser]);

  const handleCredential = (e) => {
    if (e.target.value) {
      setErrors({});
      setCredential(e.target.value);
    }
  };

  const handlePassword = (e) => {
    if (e.target.value) {
      setErrors({});
      setPassword(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  console.log('Errors === ', errors)
  return (
    <section className='flex flex-col items-center mx-auto text-center text-white border border-white rounded-lg px-1 py-2 md:py-4 md:w-3/4 lg:w-1/2'>
      <div className='mx-auto'>
        <h1 className='text-2xl md:text-3xl mx-auto mb-4 w-3/4'>
          Welcome to the <strong>HAC</strong> Personal Trainer Portal
        </h1>
        <h2>Please log in to continue</h2>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col mx-auto border border-secondary rounded-lg p-2 md:py-4 md:px-8 mt-4 bg-dark w-full lg:w-4/5'
        >
          <div className='flex justify-between w-3/4'>
            <label className='mx-auto my-2 items-center' htmlFor='credential'>
              Username or Email
            </label>
            <input
              type='text'
              id='credential'
              value={credential}
              onChange={handleCredential}
              required
              className='flex justify-between border-2 border-black rounded-md bg-light px-2 mx-2 h-10 text-lg text-black'
            />
          </div>
          {errors.credential && <p className='text-red'>{errors.credential}</p>}
          <div className='flex justify-between w-3/4'>
            <label className='mx-auto my-2 items-center' htmlFor='password'>
              Password
            </label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={handlePassword}
              required
              className='flex justify-end border-2 border-black rounded-md bg-light px-2 mx-2 h-10 text-lg text-black'
            />
          </div>
          {errors.password && <p className='text-red'>{errors.password}</p>}
          <button
            type='submit'
            className='bg-secondary hover:bg-secondaryLight text-white shadow-sm px-2 py-2 m-4 mx-auto rounded-md  w-5/6'
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
