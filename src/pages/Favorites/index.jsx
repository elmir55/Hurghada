import React from 'react';
import { useFavorites } from '../../context/FavoritesContext'; // Import the custom hook

export default function Favorites() {
  const { favorites } = useFavorites(); // Деструктуризация для получения массива favorites

  return (
    <div className="max-w-[1600px] mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10">
        THESE ARE THE THINGS YOU LIKE
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">You haven't liked anything yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((item) => (
            <div key={item.id} className="shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition">
              <img src={item.imgSrc} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <p className="text-gray-800 font-semibold">
                  Liked {item.count} time{item.count > 1 ? 's' : ''}.
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
