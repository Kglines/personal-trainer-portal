import React, { useState } from 'react';
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

    if(sessionUser) {
        return navigate("/home")
    } else {
        return navigate("/login")
    };

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
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
          {/* {errors && errors?.map(error => (
            <p key={error}>{error}</p>
          ))} */}
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.credential && <p>{errors.credential}</p>}
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default LoginForm;
