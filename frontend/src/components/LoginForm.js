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
        if(!sessionUser || sessionUser.username === null) {
            return navigate("/login")
        } else {
            return navigate("/home")
        };

    }, [navigate, sessionUser])

    // if (!sessionUser) {
    //     return navigate("/login")
    // } else {
    //     return navigate("/home");
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
    <section className='flex flex-col mx-auto pt-12 pb-16 text-center mt-8  text-white border border-collapse rounded-sm sm:w-2/3 md:w-1/2'>
      <div>
        <h1 className='text-3xl'>Log In</h1>
      </div>
      <div>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col flex-1 mx-auto border border-secondary rounded-md sm:p-2 md:p-4 shadow-lg mt-8 bg-dark md:w-3/4 lg:w-2/3'
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
            className='bg-secondary text-white shadow-sm px-2 py-2 m-4 mx-auto rounded-md hover:bg-secondaryLight w-5/6 md:w-3/4'
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
