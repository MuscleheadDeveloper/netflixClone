import React, { useState, useEffect } from "react";
import instance from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  // console.log(movies);

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1) + '...' : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center"
      }}
    >
      {/* Background image */}
      <div className="banner-content">
        {/* title */}
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          {/* div with 2 buttons */}
          <buttons className="banner-button">Play</buttons>
          <buttons className="banner-button">My List</buttons>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 200)}</h1>
        {/* description */}
      </div>

      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
