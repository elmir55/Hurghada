import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../store/action';

export function SignUp() {
  const [registerIn, setRegister] = useState('');
  const [passwordIn, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.register.status);
  const authError = useSelector((state) => state.auth.register.error);

  const handleRegister = (e) => setRegister(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerIn.trim().length < 4) {
      alert('Username must be at least 4 characters long.');
      return;
    }
    if (passwordIn.trim().length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
    setLoading(true);
    dispatch(register({ username: registerIn, password: passwordIn })).finally(() => setLoading(false));
  };

  useEffect(() => {
    if (authStatus === 'SUCCESS') {
      navigate('/sign-in'); 
    }
  }, [authStatus, navigate]);

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='bg-white p-10 rounded-md shadow-md'>
        <h1 className='text-center text-3xl font-bold'>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login" aria-label="Username Input">Login</label>
            <input
              value={registerIn}
              onChange={handleRegister}
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
          <Link to='/sign-in'>
            <p className='text-end'>Уже есть аккаунт? Войти</p>
          </Link>
          <button
            type='submit'
            disabled={loading}
            className={`mt-4 border border-gray-300 w-full h-8 rounded-xl ${
              loading ? 'bg-gray-300 text-gray-600' : 'hover:bg-orange-500 text-black'
            } font-semibold active:bg-white transition-all duration-300 ease-in-out`}>
            {loading ? 'Loading...' : 'Зарегистрироваться'}
          </button>
        </form>
      </div>
    </div>
  );
}
