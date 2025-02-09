import React from 'react';
import { Link } from 'react-router-dom';
import follow from '../../shared/assets/follow.svg';  
import ture from '../../shared/assets/ture.svg';
import true1 from '../../shared/assets/true1.svg';
import true2 from '../../shared/assets/true2.svg';
import true3 from '../../shared/assets/true3.svg';
import true4 from '../../shared/assets/true4.jpg';
import true5 from '../../shared/assets/true5.svg';
import { useFavorites } from '../../context/FavoritesContext'; // Import the custom hook

export default function Block2() {
  const { addToFavorites } = useFavorites(); // Get the addToFavorites function
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const activities = [
    {
      id: 1,
      title: "Learn about Egypt’s marine life at Hurghada Grand Aquarium",
      description:
        "The Hurghada Grand Aquarium is a space dedicated not only to showcasing the abundant sea life that inhabits the Red Sea, but also as an initiative to inspire.",
      reviews: 197,
      buttonLabel: "TOUR",
      imgSrc: ture,
      link: "/tour",
    },
    {
      id: 2,
      title: "Snorkel in one of the best snorkeling destinations in Egypt",
      description:
        "Hurghada is known within Egypt as one of the main capitals of snorkeling and scuba diving, due to the pristine clear blue waters of the Red Sea.",
      reviews: 376,
      buttonLabel: "WATER ADVENTURE",
      imgSrc: true1,
      link: "/snorkel",
    },
    {
      id: 3,
      title: "Spend some time at the best beaches in Hurghada",
      description:
        "If you’re looking for a luxurious beach experience, look no further than Sunrise Garden Beach Resort.",
      reviews: 500,
      buttonLabel: "VISIT BEACHES",
      imgSrc: true2,
      link: "/visit-beaches",
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
    <div className="bg-white py-10 px-5">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center mb-5"> 
          <Link
            to="/thingstodo"
            state={{ activities }}
            className="text-4xl font-bold text-gray-800" 
            onClick={scrollToTop}
          >
            THINGS TO DO IN HURGHADA
          </Link>
        </div> 

        <div className="flex overflow-hidden space-x-6 scrollbar-hide">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-col bg-white shadow-lg rounded-lg w-[400px] flex-shrink-0 relative"
            >
              <div className="relative w-full h-[400px]">
                <img src={activity.imgSrc} alt="Activity" className="w-full h-full object-cover" />
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
              <div className="p-5">
                <div className="flex justify-start items-center mb-3">
                  <span className="text-yellow-500">★★★★★</span>
                  <p className="text-gray-500 text-sm ml-2">({activity.reviews} reviews)</p>
                </div>
                <h1 className="text-lg font-bold text-gray-800 mb-2">{activity.title}</h1>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
