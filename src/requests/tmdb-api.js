import axios from "axios";

const LANGUAGE = 'en-US';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmUyMTllNjE0ZjIyMDBlZGU4Mzc3OTU2MzZiOTlkOSIsInN1YiI6IjY1ZWQ5ZDJjYmRjMzRjMDE4NTMzZWIxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RRibRpmgCguJtFBZhE3aJYe3sQQmMX69Up9i2f9T2WY';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;

const tmdbAPI = {
  posterImagePath: IMAGE_PATH,

  getTrendingMovies: async function (timeWindow = 'day', language = '') {
    const response = await axios.get(`/3/trending/movie/${timeWindow}`, {
      params: { language: language || LANGUAGE },
    });
    return response.data.results;
  },

  getMovieDetais: async function (id, language = '') {
    const response = await axios.get(`/3/movie/${id}`, {
      params: { language: language || LANGUAGE },
    });
    return response.data;
  },

  getMovieReviews: async function (id, language = '') {
    const response = await axios.get(`/3/movie/${id}/reviews`, {
      params: { language: language || LANGUAGE },
    });
    return response.data;
  },

  getMovieCast: async function (id, language = '') {
    const response = await axios.get(`/3/movie/${id}/credits`, {
      params: { language: language || LANGUAGE },
    });
    return response.data;
  },

  getMoviesByQuery: async function (query, language = '') {
    const response = await axios.get(`/3/search/movie`, {
      params: { query, language: language || LANGUAGE, include_adult: false },
    });
    return response.data.results;
  },
};

export default tmdbAPI;