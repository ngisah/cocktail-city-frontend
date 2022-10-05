import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

function DrinkList({ cocktails }) {

  const renderCocktails = cocktails.map((cocktail) => (

   
    <div key={cocktail.id}>
      <li>
      <Link to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link>
      </li>
      <br></br>
    </div>
   )
  )
return <ul>{renderCocktails}</ul>
}
export default DrinkList;