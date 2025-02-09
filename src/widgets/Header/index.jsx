import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logos from '../../shared/assets/Logos.png';
import { FavoriteBorder } from '@mui/icons-material'; 

export function Header() {
  const location = useLocation(); 

  const getHeaderStyle = () => {
    if (location.pathname === '/airporttransfer') {
      return { backgroundColor: '#3E2723', textColor: 'white' }; 
    }
    if (location.pathname === '/contactus') {
      return { backgroundColor: '#D3D3D3', textColor: 'black' }; 
    }
    if (location.pathname === '/more') {
      return { backgroundColor: '#49678D', textColor: 'white' }; 
    }
    return { backgroundColor: '#1E3A8A', textColor: '#F5F5F5' };
  };

  const { backgroundColor, textColor } = getHeaderStyle();

  return (
    <div className="w-full" style={{ backgroundColor }} >
      <div className="max-w-[1600px] w-full mx-auto flex justify-between items-center py-3 px-5">

        <div className="flex items-center">
          <Link to="/">
            <img src={logos} alt="Logo" className="w-auto h-12" />
          </Link>
        </div>

        <nav className={`flex space-x-10  font-medium text-lg uppercase mx-auto`} style={{ color: textColor }}>
          <Link to="/thingstodo" className="hover:opacity-80 transition duration-200 ease-in-out" style={{ color: textColor }}>
            Things to do
          </Link>
          <Link to="/news" className="hover:opacity-80 transition duration-200 ease-in-out" style={{ color: textColor }}>
            News
          </Link>
          <Link to="/foodguide" className="hover:opacity-80 transition duration-200 ease-in-out" style={{ color: textColor }}>
            Food guide
          </Link>
          <Link to="/airporttransfer" className="hover:opacity-80 transition duration-200 ease-in-out" style={{ color: textColor }}>
            Airport transfer
          </Link>
          <Link to="/contactus" className="hover:opacity-80 transition duration-200 ease-in-out" style={{ color: textColor }}>
            Contact us
          </Link>
        </nav>

        <div className="flex items-center ">
          <Link to="/favorites">
            <FavoriteBorder
              style={{
                fontSize: '1.9rem',
                color: 'white',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease-in-out',
              }}
              className="hover:opacity-80 ]" 
            />
          </Link>
        </div> 
             {/* <Link  to='/sign-in'> 
          <button className='border ml-[-260px] border-gray-300 w-[100px] h-8 rounded-xl hover:bg-blue-600 text-white font-semibold active:bg-white transition-all duration-300 ease-in-out '>Sign in</button>  </Link> 
          <Link to='/sign-up'> 
          <button className='border ml-[-140px] border-gray-300 w-[100px] h-8 rounded-xl hover:bg-blue-600 text-white font-semibold active:bg-white transition-all duration-300 ease-in-out '>Sign up</button> </Link> */}
      </div>
    </div>
  );
}
