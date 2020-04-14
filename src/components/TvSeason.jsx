import React from 'react';

const TvFilmBadge = () => (
  <span className='tv-film-badge'>TV Film</span>
);

const TvSeason = ({ name, description, episodes, prices: { buy, rent } }) => (
  <div className='tv-season-element'>
    <h3>{ name }</h3>

    { episodes.length === 1 &&  <TvFilmBadge /> }

    <p>{ description }</p>

    <p>Rent: ${ rent }, Buy: ${ buy }</p>
  </div>
);

export default TvSeason;
