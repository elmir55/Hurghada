import React from 'react';
import tour1 from '../../shared/assets/tour9.jpg';
import tour2 from '../../shared/assets/tour2.jpg';
import tour3 from '../../shared/assets/tour3.jpg';
import tour4 from '../../shared/assets/tour7.jpg';
import { Link } from 'react-router-dom'

export default function Tour() { 
  const scrollToTop = () => {
		window.scrollTo(0, 0);
};
  return (
    <div className='w-[1400px] mx-auto px-4 py-16'>
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
        TOUR IN HURGHADA
      </h1>
      <p className="text-3xl text-gray-800 mb-16 font-semibold text-center w-[1200px] mx-auto"> 
						Hurghada is the perfect place to relax, explore, and enjoy unforgettable adventures by the Red Sea.
      </p>

      <div className='flex flex-col-reverse md:flex-row items-center mb-16 space-x-8'>
        <div className='md:mr-8 mt-6 md:mt-0 '>
          <h2 className='text-4xl font-semibold text-gray-900 mb-4'>
            Relax on Hurghada's Beaches
          </h2>
          <p className='text-gray-700 text-lg leading-relaxed'>
            The beaches in Hurghada are perfect for relaxing and having fun. You can enjoy soft sand, clear water, and warm sunshine. You can also try activities like swimming or snorkeling.
          </p>
        </div>
        <img 
          src={tour1} 
          alt="Beautiful beach in Hurghada" 
          className='w-full md:w-[600px] h-[400px] object-cover rounded-lg shadow-xl' 
        />
      </div>

      <div className='flex flex-col-reverse md:flex-row-reverse items-center mb-16 space-x-8'>
        <div className='md:mr-8 mt-6 md:mt-0 ml-8'>
          <h2 className='text-4xl font-semibold text-gray-900 mb-4'>
            Enjoy the Red Sea Views
          </h2>
          <p className='text-gray-700 text-lg leading-relaxed'>
            The Red Sea is stunning, with bright blue water and beautiful views. You can take a boat trip or walk along the coast to see its beauty.
          </p>
        </div>
        <img 
          src={tour2} 
          alt="Red Sea in Hurghada" 
          className='w-full md:w-[600px] h-[400px] object-cover rounded-lg shadow-xl' 
        />
      </div>

      <div className='flex flex-col-reverse md:flex-row items-center mb-16 space-x-8'>
        <div className='md:mr-8 mt-6 md:mt-0'>
          <h2 className='text-4xl font-semibold text-gray-900 mb-4'>
            Explore Underwater Wonders
          </h2>
          <p className='text-gray-700 text-lg leading-relaxed'>
            Hurghada is great for diving. You can see colorful coral reefs and many types of fish. Even if you're new to diving, the Red Sea will amaze you.
          </p>
        </div>
        <img 
          src={tour3} 
          alt="Underwater diving in Hurghada" 
          className='w-full md:w-[600px] h-[400px] object-cover rounded-lg shadow-xl' 
        />
      </div>

      <div className='flex flex-col-reverse md:flex-row-reverse items-center mb-16 space-x-8'>
        <div className='md:mr-8 mt-6 md:mt-0 ml-8'>
          <h2 className='text-4xl font-semibold text-gray-900 mb-4'>
            Desert Adventures
          </h2>
          <p className='text-gray-700 text-lg leading-relaxed'>
            The desert near Hurghada is perfect for adventure lovers. You can ride a quad bike, go dune bashing, or ride a camel to explore the sandy landscape.
          </p>
        </div>
        <img 
          src={tour4} 
          alt="Desert safari in Hurghada" 
          className='w-full md:w-[600px] h-[400px] object-cover rounded-lg shadow-xl' 
        />
      </div> 
      <div className='flex space-x-4 text-2xl ml-[30px]'>  
        <Link to='/'> 
        <p className=' text-black hover:text-slate-600  transition ' onClick={scrollToTop}>Main</p></Link>
        <Link to='/Thingstodo'>  <p className=' text-black hover:text-slate-600  transition ' onClick={scrollToTop}>ThingsTODo</p></Link>
        <Link to='/tour'>  <p className=' text-black hover:text-slate-600  transition ' onClick={scrollToTop}> Tour</p></Link>
      </div>
    </div>
  );
}
