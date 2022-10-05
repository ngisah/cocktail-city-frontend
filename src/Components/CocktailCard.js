import React from 'react'
import { useParams } from "react-router-dom"
import './style.css'

function CocktailCard({cocktails}){

    console.log(cocktails)
    const params = useParams()
    const cocktail = cocktails[params.id - 1]

    return (
        <div className='text'>
          
          <h3>{cocktail?.name}</h3>
          <img className = 'image' src={cocktail?.image} alt={cocktail?.name}></img>
          <br></br>
          Ingredients:
          <p>{cocktail?.ingredients}</p>
          Directions:
          <p>{cocktail?.directions}</p>
        </div>
      )
}

export default CocktailCard