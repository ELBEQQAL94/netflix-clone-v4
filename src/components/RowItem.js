import React, { useState } from 'react';

// prop types
import PropTypes from 'prop-types';

// base image url
import baseImgUrl from "../services/baseImgUrl";

const RowItem = ({ movies, isLargeRow }) => {

  const [loadImag, setLoadImag] = useState(false);

  return (
    <div className="row__posters">
        {
          movies?.map(({poster_path, name, id, backdrop_path}) =>
            // show this for 1s before show img
              (<img
                key={id}
                style={loadImag ? {} : {display: 'none'}}
                src={`${baseImgUrl}${isLargeRow ? poster_path : backdrop_path}`}
                alt={name}
                title={name}
                className={`row__poster ${isLargeRow && "row__poster--large"}`}
                onLoad={() => setLoadImag(true)}
              />)
          )
        }
      </div>
  )
}

RowItem.propTypes = {
  movies: PropTypes.array.isRequired,
  isLargeRow: PropTypes.bool,
};

export default RowItem;
