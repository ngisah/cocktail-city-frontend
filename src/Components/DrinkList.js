import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

function DrinkList({ cocktails }) {
    const linkStyle = {
        color: 'black',
        fontSize: '25px',
        textDecorationThickness: '2px',
      };

  const renderCocktails = cocktails.map((cocktail) => (

   
    <div key={cocktail.id}>
      <li>
      <Link to={`/cocktails/${cocktail.id}`} style={linkStyle}>{cocktail.name}</Link>
      </li>
      <br></br>
    </div>
   )
  );

return <ul className='cocktails'>{renderCocktails}</ul>
};
export default DrinkList;