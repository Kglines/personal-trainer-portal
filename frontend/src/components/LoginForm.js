import React, { useEffect, useState } from 'react';
import * as sessionActions from '../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sessionUser = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if(!sessionUser) {
            return navigate("/login")
        } else {
            return navigate("/home")
        };

    }, [navigate, sessionUser])

    // if (!sessionUser) {
    //     return redirect("/login")
    // } else {
    //     return redirect("/");
    // }

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
  return (
    <div className='flex flex-col mx-auto pt-12 pb-16 text-center mt-8  text-white border border-collapse rounded-sm w-1/2'>
      <h1 className='text-3xl'>Log In</h1>
      <form
        onSubmit={handleSubmit}
        className='flex-col mx-auto border border-secondary rounded-md p-4 shadow-lg mt-8 bg-dark'
      >
        <div>
          <label className='flex justify-end my-4'>
            Username or Email
            <input
              type='text'
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              className='border-2 border-black rounded-md bg-light px-2 mx-2 text-black'
            />
            {/* {errors && errors?.map(error => (
              <p key={error}>{error}</p>
            ))} */}
          </label>
        </div>
        <div className='flex justify-end'>
          <label className='flex'>
            Password
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='border-2 border-black rounded-md bg-light px-2 mx-2 text-black'
            />
          </label>
        </div>
        {errors.credential && <p>{errors.credential}</p>}
        <button
          type='submit'
          className='bg-secondary text-white shadow-sm px-4 py-2 mt-4 rounded-md hover:bg-secondaryLight'
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
