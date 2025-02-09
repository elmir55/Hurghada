import React from 'react';
import water1 from '../../shared/assets/water1.svg';
import water2 from '../../shared/assets/water2.svg';
import water3 from '../../shared/assets/water3.svg';
import { Link } from 'react-router-dom'

export default function WaterAdventure() { 
  const scrollToTop = () => {
		window.scrollTo(0, 0);
};
  return (
    <div className="bg-white">
      <div
        className="relative bg-cover bg-center h-[500px] flex flex-col justify-center items-center text-center text-white w-full"
        style={{ backgroundImage: `url(${water1})` }}
      >
        <p className="text-3xl font-semibold tracking-wider">SNORKELING IN</p>
        <h1 className="text-6xl font-bold mt-2 drop-shadow-lg">HURGHADA</h1>
      </div>

      <div className="max-w-[1600px] mx-auto py-16 px-8 lg:px-20">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          Best Time to Go Snorkeling in Hurghada
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Egypt is a top destination for snorkeling and diving, offering vibrant coral reefs and incredible marine life. The Red Sea's untouched coral ecosystems are a must-see for nature lovers. Whether you're a beginner or experienced snorkeler, this is the perfect spot to explore underwater beauty.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The best part? Egypt is a year-round destination! Summers (July-August) bring warm waters of 29-30°C, while winters (December-January) dip to 20-21°C. A 3 mm wetsuit can be handy in cooler months, but most people enjoy snorkeling without it.
        </p>
        <img
          src={water2}
          alt="Snorkeling in Hurghada"
          className="w-full rounded-lg shadow-lg mb-12"
        />
      </div>

      <div className="max-w-[1600px] mx-auto py-16 px-8 lg:px-20">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          Where to Go Snorkeling in Hurghada?
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Hurghada, once a fishing village, is now a vibrant coastal destination. It blends tradition with modern attractions, offering bazaars, luxury hotels, and landmarks like the Marina. It's also an excellent base for visiting the iconic Pyramids in Cairo.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          For the best snorkeling, choose hotels in Makadi Bay, Sahl Hasheesh, or Soma Bay. These areas have access to vibrant coral reefs, making them perfect for underwater exploration. Avoid city-center hotels with sandy beaches and limited marine life.
        </p>
        <img
          src={water3}
          alt="Snorkeling locations in Hurghada"
          className="w-full h-[600px] object-cover rounded-lg shadow-lg"
        />
      </div> 
      <div className=' flex max-w-[1600px] m-auto mb-4 px-24 space-x-5 text-2xl'>  
          <Link to='/'><p className='text-black hover:text-orange-600 transition' onClick={scrollToTop}>Main Page</p></Link>
          <Link to='/Thingstodo'><p className='text-black hover:text-orange-600 transition' onClick={scrollToTop}>ThingsToDo</p></Link>
          <Link to='/snorkel'><p className='text-black hover:text-orange-600 transition' onClick={scrollToTop}>WaterAdventure</p></Link>
        </div>
    </div>
  );
}
