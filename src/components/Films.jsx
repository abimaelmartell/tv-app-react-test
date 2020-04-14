import React from 'react';

import Film from './Film';

const Films = ({ films }) => (
  <div>
    <h2>Films List</h2>

    { films.map(film => <Film key={film.name} {...film} />) }
  </div>
);

export default Films;
