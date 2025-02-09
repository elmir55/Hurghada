import React from 'react';
import neew4 from '../../shared/assets/neew4.svg'; 
import neew5 from '../../shared/assets/neew5.svg';
import neew6 from '../../shared/assets/neew6.svg';
import neew7 from '../../shared/assets/neew7.svg';
import neew8 from '../../shared/assets/neew8.svg';
import { Link } from 'react-router-dom'

export default function News() { 
	const scrollToTop = () => {
		window.scrollTo(0, 0);
};
  return (
    <div>

      <div className="w-full max-w-[1600px] mt-1 m-auto bottom-6 relative"> 
      <h2 className="text-6xl mt-28 mb-10 text-blue-950 font-bold text-center ">NEWS IN HURGHADA</h2>
        <img 
          src={neew5} 
          alt="News Image" 
          className="w-full max-w-[1600px] object-cover rounded-lg"
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-8 px-12 flex justify-between items-center rounded-lg">
          <div>
            <h1 className="text-4xl font-extrabold text-white leading-tight uppercase">
              Egypt- Hurghada receives 1st tourist group from Berlin
            </h1>
            <p className="text-lg text-white mt-3 opacity-90">
              Tourist Office of the Egyptian Tourism Promotion Board in Egypt's Red Sea coastal city of Hurghada received...
            </p> 
            <h2 className="text-white text-sm mt-2">12/20/2022 3:16:06 PM</h2>
          </div>
          <Link to='/more'> 
          <button className="px-2 py-1 bg-white text-slate-950 rounded-lg text-lg font-semibold shadow-lg" onClick={scrollToTop}>
            MORE
          </button> 
										</Link>
        </div>
      </div>

      <div className="w-full max-w-[1600px] m-auto space-y-6">
        <div className="relative">
          <img src={neew6} alt="News Image 2" className="w-full max-w-[1600px] object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-8 px-12 flex justify-between items-center rounded-lg">
            <div>
              <h1 className="text-4xl font-extrabold text-white leading-tight uppercase">
                The historic city where homes sell for an extra £70,000
              </h1>
              <p className="text-lg text-white mt-3 opacity-90">
                Edward Stoyle, of Savills estate agents, said York offered a reasonable commute to London and other cities to the north.
              </p>
              <h2 className="text-white text-sm mt-2">12/20/2022 3:16:06 PM</h2>
            </div>
            
            <button className="px-2 py-1 bg-white text-slate-950 rounded-lg text-lg font-semibold shadow-lg">
              MORE
            </button>
          </div>
        </div>

        {/* News 3 */}
        <div className="relative">
          <img src={neew7} alt="News Image 3" className="w-full max-w-[1600px] object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-8 px-12 flex justify-between items-center rounded-lg">
            <div>
              <h1 className="text-4xl font-extrabold text-white leading-tight uppercase">
                Moderate earthquake of magnitude 4.6 just reported 86 km northwest of Hurghada, Egypt
              </h1>
              <p className="text-lg text-white mt-3 opacity-90">
                A magnitude 4.6 earthquake near Hurghada, Mar Rojo, Egypt, was reported only 13 minutes ago by the German Research Centre for Geosciences.
              </p>
              <h2 className="text-white text-sm mt-2">12/20/2022 3:16:06 PM</h2>
            </div>
            
            <button className="px-2 py-1 bg-white text-slate-950 rounded-lg text-lg font-semibold shadow-lg">
              MORE
            </button>
          </div>
        </div>

        {/* News 4 */}
        <div className="relative">
          <img src={neew8} alt="News Image 4" className="w-full max-w-[1600px] object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-8 px-12 flex justify-between items-center rounded-lg">
            <div>
              <h1 className="text-4xl font-extrabold text-white leading-tight uppercase">
                Air Cairo starts new flights to Hurghada from Budapest, Milan and Naples
              </h1>
              <p className="text-lg text-white mt-3 opacity-90">
                Budapest International Airport announced that the low-cost Egyptian company Air Cairo has taken nearly 40,000 one-way seats to Egypt from next year’s reservations.
              </p>
              <h2 className="text-white text-sm mt-2">12/20/2022 3:16:06 PM</h2>
            </div>
            
            <button className="px-2 py-1 bg-white text-slate-950 rounded-lg text-lg font-semibold shadow-lg">
              MORE
            </button>
          </div>
        </div> 
								<div className="max-w-[1600px] m-auto px-6 py-8">
  <div className="mb-12">
    <h1 className="text-5xl font-extrabold text-gray-800 mb-4">NEWS HURGHADA</h1>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      With its mild weather and sunshine almost all year-round, sprawling beaches and exquisite coral reefs, Hurghada is one of the most outstanding tourist cities in Egypt and a major tourist hub for domestic and foreign tourists alike. Its natural islands make up a virgin environment for a variety of rare flora and fauna, offering a perfect setting for enjoying recreational sports such as land hunting and fishing.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      Once just a lay-by for fishermen and now a burgeoning resort town, Hurghada is cuddled between the Sahara and the Red Sea. Plucked from limbo and pushed into the limelight, it's an aquatic wonderland for sailors, divers, sunbathers, and desert dwellers. With historic districts, traditional markets, renowned diving centres, and desert safaris, the town has emerged as an ideal destination for underwater adventures.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      Today, it is a busy, sprawling town divided into three main areas, the Old Town (al Dahar) to the north, Saqala, the city centre to the south, and the modern Marina with its waterside cafes and restaurants. El Dahar is where the town's largest bazaar, the post office, and the long-distance bus station are located.
    </p>
  </div>

  <div className="mb-12">
    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Highlights</h2>
    <nav className="list-disc pl-6 space-y-2">
      <p className="text-lg text-gray-600">El Dahar (Old Town)</p>
      <p className="text-lg text-gray-600">Marina boulevard</p>
      <p className="text-lg text-gray-600">Hurghada Museum</p>
      <p className="text-lg text-gray-600">Grand Aquarium</p>
      <p className="text-lg text-gray-600">Mini Egypt Park</p>
      <p className="text-lg text-gray-600">St. Shenouda's Coptic Orthodox church</p>
      <p className="text-lg text-gray-600">El Saqala (City centre)</p>
    </nav>
  </div>

  <div>
    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">WHEN TO GO</h1>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      With pleasant weather and warm waters, Hurghada is a year-round destination. In summers, Egyptians – from Cairo and Luxor – flock here to escape the heat. The best time to travel in Hurghada is from April to June and September to November. During these periods, vacationers can expect warm sunny weather that is tolerable. We recommend desert safaris into the sandy terrains where you can learn the exotic traditions of the Bedouin people. They also usually include a BBQ dinner, camel rides across biblical plains, and a memorable stargazing experience.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      Day trips to Sahl Hasheesh, Makadi Bay, Safaga, and El Gouna, the nearby touristic resorts with diving spots and private golf courses. Alternatively, you can take boat tours to offshore islands like Sheduan Island, Orange Bay Island, and Abu Ramada Island.
    </p>
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
    </div>
  );
}
