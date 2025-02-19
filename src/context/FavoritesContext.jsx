import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (activity) => {
    if (!favorites.some((fav) => fav.id === activity.id)) {
      setFavorites((prev) => [...prev, activity]);
    }
  };

  const removeFromFavorites = (activityId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== activityId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
