import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../shared/assets/404p.svg';
import phooto from '../../shared/assets/404.svg';

export function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-gray-800"
      style={{
        backgroundImage: `url(${photo})`,
      }}
    >
      <div className="text-center mt-[-100px]">
        <img
          src={phooto}
          alt="404 Illustration"
          className="w-full max-w-[700px] ml-[480px] "
        />
      </div>

      <div className="text-start mt-[-200px] px-5 ml-[-800px] ">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 w-[400px] ">
          Welcome to the 404th Wonder of Hurghada!
        </h1>
        <p className="text-lg text-gray-700 mb-8 w-[380px]">
          Oops! The page you're looking for isn't here. But don't worry, your journey doesn't end here!
        </p>

        <Link to="/" className="inline-block">
          <button className="bg-orange-600 text-white text-2xl py-3 px-10 rounded-lg shadow-lg hover:bg-orange-700 transform transition-transform hover:scale-105">
             Main Page
          </button>
        </Link>
      </div>
    </div>
  );
}
