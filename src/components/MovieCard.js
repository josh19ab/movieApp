import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/slices/favoritesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div
      className="movie-card p-4 bg-white shadow-md rounded-lg cursor-pointer transform hover:scale-105 transition-transform"
      onClick={() => window.open(movie.imdb_url, '_blank')}
    >
      <img src={movie.image} alt={movie.movie} className="w-full h-64 object-cover rounded-t-lg" />
      <h2 className="mt-2 text-lg font-bold">{movie.movie}</h2>
      <p className="mt-1 text-sm">Rating: {movie.rating}</p>
      <button
        onClick={handleFavoriteToggle}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

export default MovieCard;
