import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import follow from '../../shared/assets/follow.svg';
import food1 from '../../shared/assets/food1.svg';
import food2 from '../../shared/assets/food2.svg';
import food3 from '../../shared/assets/food3.svg';
import food4 from '../../shared/assets/food4.svg';
import food5 from '../../shared/assets/food5.svg';
import food6 from '../../shared/assets/food6.svg';
import food7 from '../../shared/assets/food7.svg';
import food8 from '../../shared/assets/food8.svg';
import food9 from '../../shared/assets/food9.svg';
import { useFavorites } from '../../context/FavoritesContext'

export default function FoodGuide() { 
  const { addToFavorites } = useFavorites();

  const navigate = useNavigate(); 


  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const cards = [
    {
      id: 1,
      title: 'Moby Dick Restaurant',
      description:
        'Hurghada is known within Egypt as one of the main capitals of snorkeling and scuba diving, due to the pristine clear blue waters of the Red Sea.',
      reviews: 116,
      buttonLabel: 'NATIONAL',
      imgSrc: food1,
    },
    {
      id: 2,
      title: 'Starfish Seafood Restaurant',
      description:
        'The Hurghada Grand Aquarium is a space dedicated not only to showcasing the abundant sea life that inhabits the Red Sea, but also as an initiative to inspire.',
      reviews: 87,
      buttonLabel: 'AMERICAN',
      imgSrc: food2,
    },
    {
      id: 3,
      title: 'Granada Restaurant & Pub Hurghada',
      description:
        'Hurghada is known within Egypt as one of the main capitals of snorkeling and scuba diving, due to the pristine clear blue waters of the Red Sea and abundant marine.',
      reviews: 346,
      buttonLabel: 'NATIONAL',
      imgSrc: food3,
    },
    {
      id: 4,
      title: 'Solo Restaurant & Lounge',
      description:
        'Sand City Hurghada is a magnificent open-air museum to visit and truly appreciate the craft of sand art. Be amazed at the details, creativity, patience.',
      reviews: 324,
      buttonLabel: 'ASIA',
      imgSrc: food4,
    },
    {
      id: 5,
      title: 'Sofra Oriental',
      description:
        'If you’re looking for a luxurious beach experience, look no further than Sunrise Garden Beach Resort, situated not too far from other great amenities such.',
      reviews: 216,
      buttonLabel: 'ITALIAN',
      imgSrc: food5,
    },
    {
      id: 6,
      title: 'Stone Restaurant & Bar',
      description:
        'Take a breathtaking boat tour to Orange Bay, a beautiful sandy stretch featuring beach swings, and hammocks, located on Giftun Island.',
      reviews: 271,
      buttonLabel: 'FRANCE',
      imgSrc: food6,
    },
    {
      id: 7,
      title: 'Hangover Bar & Grill',
      description:
        'Visit the largest collection of ancient papyrus, where you will learn about the practice of making papyrus, as well as the history behind the invention.',
      reviews: 169,
      buttonLabel: 'NATIONAL',
      imgSrc: food7,
    },
    {
      id: 8,
      title: 'Amaya Restaurant Madinat Makadi',
      description:
        'Though it is called Mahmya Island, it is really a beach situated on Giftun Island where visitors can enjoy a carefree moment on the sandy beach.',
      reviews: 236,
      buttonLabel: 'NATIONAL',
      imgSrc: food8,
    },
    {
      id: 9,
      title: 'Bulls Restaurant',
      description:
        'Scuba diving is an absolute must activity to add to your list of things to do in Hurghada, and one of those prime scuba diving sites is Gota Abu Ramada.',
      reviews: 441,
      buttonLabel: 'FRANCE',
      imgSrc: food9,
    },
  ];

  return (
    <div>
      <div className="max-w-[1600px] m-auto py-10">
        <div className="text-center text-5xl font-bold text-slate-900 mb-9">
          <h1>FOOD GUIDES IN HURGHADA</h1>
        </div>

        <div className="flex flex-wrap justify-center space-x-4 mb-16">
          {['AMERICAN', 'NATIONAL', 'FRANCE', 'ASIA', 'ITALIAN', 'GERMANY', 'UKRAINE'].map(
            (cuisine) => (
              <button
                key={cuisine}
                onClick={() => navigate(`/cuisine/${cuisine.toLowerCase()}`)}
                className="bg-orange-600 text-white text-xl font-bold py-2 px-8 rounded-2xl hover:bg-orange-800 transform transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                {cuisine}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col shadow-lg rounded-lg w-full relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-[450px]">
                <Link to={`/nationald/${card.id}`} onClick={scrollToTop}>
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-t-lg cursor-pointer"
                  />
                </Link>
                <div className="absolute top-3 left-3 bg-white text-orange-500 py-1 px-4 rounded-full text-lg font-bold shadow-md border border-orange-500">
                  <button
                    onClick={() => navigate(`/cuisine/${card.buttonLabel.toLowerCase()}`)}
                  >
                    {card.buttonLabel}
                  </button>
                </div>
                <img
                  src={follow}
                  alt="Follow"
                  className="absolute top-3 right-3 w-12 h-12 cursor-pointer hover:opacity-80 transition" 
                  onClick={() => addToFavorites(card)}
                />
              </div>

              <div className="p-5">
                <div className="flex justify-start items-center mb-3">
                  <span className="text-yellow-500">★★★★★</span>
                  <p className="text-gray-500 text-sm ml-2">({card.reviews} reviews)</p>
                </div>
                <h1 className="text-2xl font-extrabold text-gray-800 mb-2 uppercase">{card.title}</h1>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
