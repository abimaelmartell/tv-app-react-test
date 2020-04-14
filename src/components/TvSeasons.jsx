import React from 'react';

import TvSeason from './TvSeason';

const TvSeasons = ({ seasons }) => (
  <div>
    <h2>TV Seasons List</h2>

    { seasons.map(season => <TvSeason key={season.name} {...season} />) }
  </div>
);

export default TvSeasons;
