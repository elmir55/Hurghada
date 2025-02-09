import React from 'react';
import more1 from '../../shared/assets/more1.svg';
import more2 from '../../shared/assets/more2.svg';
import more3 from '../../shared/assets/more3.svg';
import more4 from '../../shared/assets/more4.svg';
import more5 from '../../shared/assets/more5.svg';
import { Link } from 'react-router-dom'

export default function More() { 
	const scrollToTop = () => {
		window.scrollTo(0, 0);
}; 
  return (
    <div className="bg-gray-50">
      <div
        className="w-full h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${more1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-xl font-medium text-white uppercase tracking-widest">
            News In
          </h2>
          <h1 className="text-6xl font-extrabold text-white uppercase mt-4">
            Hurghada
          </h1>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white shadow-2xl rounded-xl p-8">
            <h1 className="text-4xl font-extrabold text-blue-900 mb-6">
              Egypt - Hurghada Receives 1st Tourist Group from Berlin
            </h1>
            <h3 className="text-gray-500 text-md mb-8">12/20/2022 3:16:06 PM</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Tourist Office of the Egyptian Tourism Promotion Board in Hurghada marked a milestone as it welcomed the first tourist group from Berlin since the resumption of travel. This development symbolizes a significant step in revitalizing the tourism industry in Egypt after the challenges posed by the COVID-19 pandemic.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Hurghada International Airport greeted a direct flight from Berlin carrying 125 passengers. The arrival brought joy to both tourists and local businesses as the city is known for its pristine beaches, vibrant coral reefs, and rich cultural experiences.
            </p>
            <img src={more2} alt="Hurghada Tourism" className="w-full rounded-xl shadow-lg mb-8" />
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Egypt’s Minister of Tourism and Antiquities, Khaled al-Anany, emphasized the importance of this achievement during his recent visit to Berlin. His discussions with German officials focused on expanding tourism collaboration and addressing challenges such as the Russian-Ukrainian conflict’s impact on travel.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              As the tourism sector recovers, the arrival of tourists from Germany and other European countries signals a bright future for Hurghada. Efforts are ongoing to ensure the region remains a top destination for international visitors.
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Key Highlights:</h2>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>First flight from Berlin to Hurghada in 10 months.</li>
                <li>Collaboration between Egyptian and German officials to resume tourism.</li>
                <li>Efforts to enhance safety measures and improve visitor experiences.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6">
            <h1 className="text-3xl font-bold text-blue-900 mb-8">
              Recommended News
            </h1>
            <div className="space-y-12">
              <div className="bg-white shadow-lg rounded-xl overflow-hidden h-full">
                <img
                  src={more3}
                  alt="News 1"
                  className="w-full h-[250px] object-cover rounded-t-xl"
                />
                <div className="p-6 flex flex-col justify-between h-full">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Jonnie Irwin gives cancer battle update as he shares candid Christmas snaps
                  </h2>
                  <p className="text-gray-500 text-sm">2 days ago</p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-xl overflow-hidden h-full">
                <img
                  src={more4}
                  alt="News 2"
                  className="w-full h-[250px] object-cover rounded-t-xl"
                />
                <div className="p-6 flex flex-col justify-between h-full">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    London hospital pioneers new approach to hip and knee surgery
                  </h2>
                  <p className="text-gray-500 text-sm">2 days ago</p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-xl overflow-hidden h-full">
                <img
                  src={more5}
                  alt="News 3"
                  className="w-full h-[250px] object-cover rounded-t-xl"
                />
                <div className="p-6 flex flex-col justify-between h-full">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Development Lights Up Hurghada with the First Edition of ALDAU International Art Festival
                  </h2>
                  <p className="text-gray-500 text-sm">4 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
						<div className="flex justify-between    w-[310px] mx-auto py-8">
  <Link to="/" className="text-xl font-semibold text-blue-900 hover:text-blue-600 transition duration-300" onClick={scrollToTop}>
    <h2>Main page</h2>
  </Link>
  <Link to="/news" className="text-xl font-semibold text-blue-900 hover:text-blue-600 transition duration-300" onClick={scrollToTop}>
    <h2>News in Hurghada</h2>
  </Link>
</div>

    </div>
  );
}
