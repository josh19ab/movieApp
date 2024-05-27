import { createSlice } from '@reduxjs/toolkit';
import { loadFavorites, saveFavorites } from '../../utils/localStorage';

const initialState = {
  favorites: loadFavorites(), 
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const newFavorite = action.payload;
      if (!state.favorites.some(movie => movie.id === newFavorite.id)) {
        state.favorites.push(newFavorite);
        saveFavorites(state.favorites); 
      }
    },
    removeFavorite: (state, action) => {
      const updatedFavorites = state.favorites.filter((movie) => movie.id !== action.payload);
      state.favorites = updatedFavorites;
      saveFavorites(state.favorites); 
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
