/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.API_KEY;

// accessing the tmdb api
export default {
     fetchTrending: {
          title: "Trending",
          url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
     },
     fetchTrending: {
          title: "Trending",
          url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
     },
     fetchTopRated: {
          title: "top rated",
          url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
     },
     fetchActionMovies: {
          title: "Action",
          url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
     },
     fetchComedyMovies: {
          title: "Comedy",
          url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
     },
     fetchHorrorMovies: {
          title: "Horror",
          url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
     },
     fetchRomanceMovies: {
          title: "Romance",
          url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     },
     fetchMystery: {
          title: "Mystery",
          url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
     },
     fetchSciFi: {
          title: "Sci-Fi",
          url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
     },
     fetchWestern: {
          title: "Western",
          url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
     },
     fetchTv: {
          title: "TV Movie",
          url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
     },
};
