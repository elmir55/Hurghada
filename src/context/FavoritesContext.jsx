import React, { createContext, useState, useContext } from 'react';

// Create the context
const FavoritesContext = createContext();

// Create a provider component
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Add an activity to favorites
  const addToFavorites = (activity) => {
    // Check if the activity is already in favorites
    if (!favorites.some((fav) => fav.id === activity.id)) {
      setFavorites((prev) => [...prev, activity]);
    }
  };

  // Remove an activity from favorites
  const removeFromFavorites = (activityId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== activityId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Create a custom hook for easier access
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
