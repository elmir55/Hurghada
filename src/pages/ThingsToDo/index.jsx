import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import follow from '../../shared/assets/follow.svg';  
import ture from '../../shared/assets/ture.svg';
import true1 from '../../shared/assets/true1.svg';
import true2 from '../../shared/assets/true2.svg';
import true3 from '../../shared/assets/true3.svg';
import true4 from '../../shared/assets/true4.jpg';
import true5 from '../../shared/assets/true5.svg';
import { useFavorites } from '../../context/FavoritesContext'; 

export default function ThingsToDo() {
  const { addToFavorites } = useFavorites();
  const scrollToTop = () => window.scrollTo(0, 0);
  const location = useLocation();

  const activities = [
    {
      id: 1,
      title: "Learn about Egypt’s marine life at Hurghada Grand Aquarium",
      description: "The Hurghada Grand Aquarium is a space dedicated not only to showcasing the abundant sea life that inhabits the Red Sea, but also as an initiative to inspire.",
      reviews: 197,
      buttonLabel: "TOUR",
      imgSrc: ture,
      link: "/tour",
    },
    {
      id: 2,
      title: "Snorkel in one of the best snorkeling destinations in Egypt",
      description: "Hurghada is known within Egypt as one of the main capitals of snorkeling and scuba diving, due to the pristine clear blue waters of the Red Sea.",
      reviews: 376,
      buttonLabel: "WATER ADVENTURE",
      imgSrc: true1,
      link: "/snorkel",
    },
    // Add more activities as needed 
    {
      id: 3,
      title: "Spend some time at the best beaches in Hurghada",
      description:
        "If you’re looking for a luxurious beach experience, look no further than Sunrise Garden Beach Resort.",
      reviews: 500,
      buttonLabel: "VISIT BEACHES",
      imgSrc: true2,
      link: "/beach",
    },
    {
      id: 4,
      title: "Enjoy scuba diving in one of the best places in Egypt",
      description:
        "Scuba diving is a must-try activity in Hurghada, with prime sites like Gota Abu Ramada.",
      reviews: 310,
      buttonLabel: "SCUBA DIVING",
      imgSrc: true3,
      link: "/scuba-diving",
    },
    {
      id: 5,
      title: "Discover the local culture",
      description:
        "Immerse yourself in Hurghada's culture by visiting bazaars, local eateries, and cultural landmarks.",
      reviews: 310,
      buttonLabel: "EXPLORE CULTURE",
      imgSrc: true4,
      link: "/explore-culture",
    },
    {
      id: 6,
      title: "Learn about the earliest form of paper at the Selkhet Papyrus Museum",
      description:
        "Visit the largest collection of ancient papyrus, where you will learn about the history behind the invention.",
      reviews: 310,
      buttonLabel: "MUSEUM",
      imgSrc: true5,
      link: "/museum",
    },
  ];

  return (
    <div className="py-10 px-5">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20">
          <h1 className="text-6xl font-semibold text-gray-800 text-center mb-10">
            CHOOSE WHAT YOU WANT TO DO
          </h1>
          <div className="flex flex-wrap justify-center space-x-4">
            {activities.map((activity) => (
              <Link to={activity.link} key={activity.id}>
                <button
                  className="bg-orange-600 text-white py-2 px-8 rounded-2xl hover:bg-orange-800 transform transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                  onClick={scrollToTop}
                >
                  {activity.buttonLabel}
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-col shadow-lg rounded-lg w-full relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Activity Image Section */}
              <div className="relative w-full h-[300px]">
                <img
                  src={activity.imgSrc}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <Link
                  to={activity.link}
                  state={{ activity }}
                  className="absolute top-3 left-3 bg-white text-orange-500 py-1 px-4 rounded-full text-sm font-semibold shadow-md border border-orange-500 hover:bg-orange-500 hover:text-white transition"
                  onClick={scrollToTop}
                >
                  {activity.buttonLabel}
                </Link>
                <img
                  src={follow}
                  alt="Follow"
                  className="absolute top-3 right-3 w-8 h-8 cursor-pointer hover:opacity-80 transition"
                  onClick={() => addToFavorites(activity)} // Add to favorites on click
                />
              </div>

              {/* Activity Info Section */}
              <div className="p-5">
                <div className="flex justify-start items-center mb-3">
                  <span className="text-yellow-500">★★★★★</span>
                  <p className="text-gray-500 text-sm ml-2">({activity.reviews} reviews)</p>
                </div>
                <h1 className="text-lg font-semibold text-gray-800 mb-2">{activity.title}</h1>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Links */}
        <div className='flex mt-10 px-3 space-x-5 text-2xl'>
          <Link to='/'><p className='text-black hover:text-orange-600 transition' onClick={scrollToTop}>Main Page</p></Link>
          <Link to='/Thingstodo'><p className='text-black hover:text-orange-600 transition' onClick={scrollToTop}>ThingsToDo</p></Link>
        </div>
      </div>
    </div>
  );
}
