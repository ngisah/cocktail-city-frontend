import React from 'react';
import { Link } from "react-router-dom";
import './style.css'
function DrinkList({ margaritas }) {

  const renderMargaritas = margaritas.map((marg) => (

   
    <div key={marg.id}>
      <li>
      <Link to={`/margaritas/${marg.id}`}>{marg.name}</Link>
      </li>
      <br></br>
    </div>
   )
  )
return <ul>{renderMargaritas}</ul>
}
export default DrinkList;