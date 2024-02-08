import React from 'react';
import {truncateText} from "helpers/truncateText";

const MovieCard = (props)  => {
  const { movie } = props;
  return (
    <div className="movie-card">
      <img src={movie.Poster}
           alt={movie.Title}
           onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://bobthebakerboy.com/img/1200x1200.jpg';}}
      />
      <div>
        <p title={movie.Title}>Title: {truncateText(movie.Title)}</p>
        <p>Type: {movie.Type}</p>
        <p>imdbID: {movie.imdbID}</p>
        <p>Year: {movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;