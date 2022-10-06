import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

function DrinkList({ cocktails }) {
    const linkStyle = {
        color: 'black',
        fontSize: '25px',
        textDecorationThickness: '2px',
      };

  const renderCocktails = cocktails.map((ctail) => (

   
    <div key={ctail.id}>
      <li>
      <Link to={`/cocktails/${ctail.id}`} style={linkStyle}>{ctail.name}</Link>
      </li>
      <br></br>
    </div>
   )
  );

return <ul className='cocktails'>{renderCocktails}</ul>
};
export default DrinkList;