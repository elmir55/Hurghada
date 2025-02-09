import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Email,
  Phone,
} from "@mui/icons-material";
import c1 from "../../shared/assets/c1.svg";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
	const scrollToTop = () => {
		window.scrollTo(0, 0);
};
  return (
    <div>
      <div
        className="w-full h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${c1})` }}
      >
        <div className="absolute inset-0  from-white via-gray-100 to-white opacity-90"></div>

        <div className="relative flex flex-col justify-center items-center h-full px-8 md:px-16">
          <div className="text-center mt-[-200px]">
            <h2 className="text-3xl  uppercase tracking-wide font-semibold text-black ml-[-400px]">
              WITH US
            </h2>
            <h1 className="text-9xl font-bold uppercase text-black">Contact</h1>
          </div>
        </div>

        <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2">
          <div className="max-w-[1600px] mx-auto px-8 space-y-6 mt-56">
            <p className="font-semibold text-black">
              <span className="uppercase">Address:</span> 222B Mohamed Said St, El
              Kawthar area, Hurghada Red Sea - Egypt
            </p>

            <p className="flex items-center space-x-2 text-black">
              <Email fontSize="small" className="text-black" />
              <span>info@hurghada.com</span>
            </p>

            <p className="flex items-center space-x-2 text-black">
              <Phone fontSize="small" className="text-black" />
              <span>+2 010 0633030</span>
            </p>

            <div className="flex items-center space-x-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                <Facebook fontSize="large" className="text-black" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                <Instagram fontSize="large" className="text-black" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                <Twitter fontSize="large" className="text-black" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                <YouTube fontSize="large" className="text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-10">
        <div className="flex items-center space-x-4 mb-6">
          <Link to="/">
            <h2 className="text-lg text-gray-500 hover:text-black transition font-medium" onClick={scrollToTop}>
              MAIN PAGE
            </h2>
          </Link>
          <Link to="/contactus">
            <h2 className="text-lg text-gray-500 hover:text-black transition font-medium" onClick={scrollToTop}>
              CONTACT US
            </h2>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black h-[370px] flex items-center justify-center mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.3008262944697!2d31.255231815114236!3d29.967835581917434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145838f52eac207b%3A0x7e0f4b1ed0b0a1ec!2s222B%20Mohamed%20Said%20St%2C%20Hurghada%2C%20Red%20Sea%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1702203243956!5m2!1sen!2us"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md">
            {!formSubmitted ? (
              <>
                <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                  <textarea
                    placeholder="Enter your message"
                    className="w-full border border-gray-300 p-2 rounded h-32"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                  >
                    Send Message
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center text-4xl text-slate-800 font-bold">
                <p>Thanks! We will respond to your message soon.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
