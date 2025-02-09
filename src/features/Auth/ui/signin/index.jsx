import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/action';

export function SignIn() {
  const [loginIn, setLogin] = useState('');
  const [passwordIn, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.login.status);
  const authError = useSelector((state) => state.auth.login.error);

  const handleLogin = (e) => setLogin(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginIn.trim() === '' || passwordIn.trim() === '') {
      alert('Login and Password cannot be empty!');
      return;
    }
    dispatch(login({ username: loginIn, password: passwordIn }));
  };

  useEffect(() => {
    if (authStatus === 'SUCCESS') {
      navigate('/'); 
    }
  }, [authStatus, navigate]);
  

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='bg-white p-10 rounded-md shadow-md'>
        <h1 className='text-center text-3xl font-bold'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login" aria-label="Login Input">Login</label>
            <input
              value={loginIn}
              onChange={handleLogin}
              required
              id='login'
              type="text"
              placeholder='Write your login'
              className='w-full outline-none border-2 py-3 px-4 rounded-2xl'
            />
          </div>
          <div className='mt-2'>
            <label htmlFor="password" aria-label="Password Input">Password</label>
            <input
              value={passwordIn}
              onChange={handlePassword}
              required
              id='password'
              type="password"
              placeholder='Write your password'
              className='w-full outline-none border-2 py-3 px-4 rounded-2xl'
            />
          </div>
          {authError && <p className="text-red-500 mt-2">{authError}</p>}
          <Link to='/sign-up'>
            <p className='text-end'>Нет аккаунта? Зарегистрироваться</p>
          </Link>
          <button
            type='submit'
            className='mt-4 border border-gray-300 w-full h-8 rounded-xl hover:bg-orange-500 text-black font-semibold active:bg-white transition-all duration-300 ease-in-out'>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
