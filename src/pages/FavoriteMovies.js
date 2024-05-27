import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

const FavoriteMovies = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  console.log("Favorites state:", favorites); // Log the favorites state

  if (favorites.length === 0) {
    return <div>No favorite movies added yet.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="favorite-movies grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default FavoriteMovies;
