import React from 'react';
import what from "../../shared/assets/what.svg";
import insta from '../../shared/assets/instagram.svg';
import twitter from '../../shared/assets/vk.svg';
import youtube from '../../shared/assets/youtube.svg';
import { Link } from 'react-router-dom'

export function Footer() { 
  const scrollToTop = () => {
		window.scrollTo(0, 0);
}; 
  return (
    <div className="bg-[#757575] w-full py-8 text-white">
      <div className="max-w-[1600px] mx-auto grid grid-cols-3 gap-8 px-5">

        <div className="flex flex-col">
          <h1 className="text-xl font-bold mb-4 uppercase">Offer</h1>
          <p className="hover:underline cursor-pointer">Public offer</p>
          <p className="hover:underline cursor-pointer">Privacy policy</p>
          <p className="hover:underline cursor-pointer">Terms of use</p>
          <p className="hover:underline cursor-pointer">Cookie policy</p>
        </div>

        <div className="flex flex-col ml-[-280px] ">
          <h1 className="text-xl font-bold mb-4 uppercase">Clients</h1>
          <p className="hover:underline cursor-pointer">Reviews</p>
          <p className="hover:underline cursor-pointer">About us</p> 
          <Link to='/contactus'> 
          <p className="hover:underline cursor-pointer" onClick={scrollToTop}>Contact</p> </Link>
        </div>

        <div className="flex flex-col items-end">
          <h1 className="text-xl font-bold mb-4 uppercase">Contacts</h1>
          <h2 className="text-lg font-semibold">Phone</h2>
          <p className="mb-2">+20 10 2123 4800</p>
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="mb-4">info@hurghada.com</p>

          <h1 className="text-xl font-bold uppercase">Social media</h1>
          <div className="flex space-x-4 mt-4">
            <a href="https://wa.me/+201021234800" target="_blank" rel="noopener noreferrer">
              <img src={what} alt="WhatsApp" className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
