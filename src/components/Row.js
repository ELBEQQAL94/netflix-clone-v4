import React, { useState, useEffect } from "react";

// Components
import RowItem from './RowItem';

// services
import instance from "../services";

// prop types
import PropTypes from 'prop-types';

import "./Row.scss";

const Row = ({ title, fetchData, isLargeRow }) => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // fetch data from server
  useEffect(() => {

    async function fetch() {
      try{
        const res =  await instance.get(fetchData);
        setMovies(res.data.results);
        setLoading(false);
      } catch(error) {
        setError(true);
      }
    }

    fetch();

  }, []);

  return (
    <div className="row">
      <h2 className="row__title">{isLargeRow ? title.toUpperCase() : title}</h2>
      {loading ? <p>loading...</p> : <RowItem movies={movies} isLargeRow={isLargeRow} />}
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  isLargeRow: PropTypes.bool,
  fetchData: PropTypes.string.isRequired,
};

export default Row;
