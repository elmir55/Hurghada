import React from 'react';
import neew1 from '../../shared/assets/neew1.svg';
import neew2 from '../../shared/assets/neew2.svg';
import neew3 from '../../shared/assets/neew3.svg';
import { Link } from 'react-router-dom'

export function Block3() { 
  const scrollToTop = () => {
		window.scrollTo(0, 0);
};
  return (
    <div className="max-w-[1600px] mx-auto px-4">
      <div> 
							<Link to="/news">  
        <h1 className="text-5xl font-bold mb-6" onClick={scrollToTop}>HURGHADA NEWS</h1> 
								</Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="relative lg:col-span-2">
              <img 
              src={neew1} 
              alt="Main news"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"> 
													<Link to='/more'>  
              <h2 className="text-2xl font-semibold text-white uppercase" onClick={scrollToTop}>
                Egypt- Hurghada receives 1st tourist group from Berlin
              </h2> </Link>
              <p className="text-gray-300 mt-2">
                Tourist Office of the Egyptian Tourism Promotion Board in
                Egypt's Red Sea coastal city of Hurghada received...
              </p>
              <p className="text-sm text-gray-400 mt-2">
                12/20/2022 3:16:06 PM
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="relative">
              <img
                src={neew2}
                alt="News 2"
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg">
                <h2 className="text-lg font-semibold text-white uppercase">
                  Egyptian Red Sea province to ban single-use plastics
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  09/12/2022 2:42:10 PM
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={neew3}
                alt="News 3"
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg">
                <h2 className="text-lg font-semibold text-white uppercase">
                  Development Lights Up Hurghada with the First Edition
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  11/18/2022 6:12:01 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
