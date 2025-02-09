import React from 'react';
import bgf from '../../shared/assets/bggg.jpg';
import facbook from '../../shared/assets/facbook.svg';
import insta1 from '../../shared/assets/insta1.svg';
import tvitter from '../../shared/assets/Twitter.svg';
import you1 from '../../shared/assets/you1.svg';

export default function Block1() { 
  
  return (
    <div className="w-full mx-auto relative">
      <div className="w-full">
        <img src={bgf} alt="Background" className="w-full h-[700px]" />
      </div> 

      <div className="absolute top-36 left-0 right-0 text-center text-white">
        <h2 className="text-4xl font-bold uppercase">WELCOME TO</h2>
        <p className="text-9xl font-semibold">HURGHADA</p>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-6">
        <a href="https://www.facebook.com/hurghadatravelguide/" target="_blank" rel="noopener noreferrer">
          <img
            src={facbook}
            alt="Facebook"
            className="w-8 h-8 cursor-pointer hover:opacity-80 transition duration-200 ease-in-out"
          />
        </a>
        <a href="https://www.instagram.com/hurghada_tourist_guide_/" target="_blank" rel="noopener noreferrer">
          <img
            src={insta1}
            alt="Instagram"
            className="w-8 h-8 cursor-pointer hover:opacity-80 transition duration-200 ease-in-out"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src={tvitter}
            alt="Twitter"
            className="w-8 h-8 cursor-pointer hover:opacity-80 transition duration-200 ease-in-out"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=JzsHfOBNYRc" target="_blank" rel="noopener noreferrer">
          <img
            src={you1}
            alt="YouTube"
            className="w-8 h-8 cursor-pointer hover:opacity-80 transition duration-200 ease-in-out"
          />
        </a>
      </div>
    </div>
  );
}
