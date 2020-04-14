import React from 'react';

const Film = ({ name, description, prices: { buy, rent } }) => (
  <div className='film-element'>
    <h3>{ name }</h3>

    <p>{ description }</p>

    <p><strong>Rent:</strong> ${ rent }, <strong>Buy:</strong> ${ buy }</p>
  </div>
);

export default Film;
