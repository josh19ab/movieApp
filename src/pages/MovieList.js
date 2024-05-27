import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/slices/moviesSlice";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  let content;

  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    content = movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <>
      <Navbar/>
      <div className="movie-list">{content}</div>
    </>
  );
};

export default MovieList;
