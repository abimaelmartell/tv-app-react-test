import React from 'react';

const Film = ({ name, description, prices: { buy, rent } }) => (
  <div>
    <h3>{ name }</h3>

    <p>{ description }</p>

    <p>Rent: ${ rent }, Buy: ${ buy }</p>
  </div>
);

export default Film;
