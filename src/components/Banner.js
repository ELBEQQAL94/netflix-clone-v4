import React, { useState, useEffect } from "react";

// services
import instance from "../services";

// base image url
import baseImgUrl from "../services/baseImgUrl";

// prop types
import PropTypes from 'prop-types';

import "./Banner.scss";

const Banner = ({fetchData}) => {

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // fetch data from server
  useEffect(() => {

    async function fetch() {
      try {
        const res =  await instance.get(fetchData);
        setMovie(res.data.results[
          Math.floor(
            Math.random() * res.data.results.length - 1
          )
        ]);
        setLoading(false);
      } catch(error) {
        setError(true);
      }
    }

    fetch();

  }, []);

  // movie title
  const title = movie?.title || movie?.name || movie?.original_name;

  // truncate description
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1)  + "...": str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseImgUrl}${movie?.backdrop_path})`,
        backgroundPosition: "center center"
      }}>

      <div className="banner__container">
        <h1 className="banner__title">{title}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          <p>{truncate(movie?.overview, 150)}</p>
        </div>
      </div>
      <div className="banner--bottom" />
    </header>
  );
};

Banner.propTypes = {
  fetchData: PropTypes.string.isRequired,
};

export default Banner;
