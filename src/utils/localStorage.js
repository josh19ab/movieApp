export const loadFavorites = () => {
    try {
      const serializedFavorites = localStorage.getItem('favorites');
      if (serializedFavorites === null) {
        return [];
      }
      return JSON.parse(serializedFavorites);
    } catch (err) {
      console.error("Could not load favorites", err);
      return [];
    }
  };
  
  export const saveFavorites = (favorites) => {
    try {
      const serializedFavorites = JSON.stringify(favorites);
      localStorage.setItem('favorites', serializedFavorites);
    } catch (err) {
      console.error("Could not save favorites", err);
    }
  };
  