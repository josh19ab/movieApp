import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_MOVIES_API_URL;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.sort((a, b) => b.rating - a.rating);
        state.status = 'succeeded';
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
