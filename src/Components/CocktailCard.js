import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import './style.css'

function CocktailCard({cocktails, onDrinkDelete}){

    
    const params = useParams();
    const cocktail = cocktails[params.id - 1];
    const navigate = useNavigate()

    function handleDelete() {
        fetch(`http://localhost:3000/cocktails/${cocktail.id}`, {
          method: "DELETE"
        }) 
        .then(r => r.json())
        .then(() => {onDrinkDelete(cocktail)
        navigate("/cocktails")

    })
      };

    return cocktail ?(
        <div className='text'>
          
          <h3>{cocktail.name}</h3>
          <img className = 'image' src={cocktail.image} alt={cocktail.name}></img>
          <br></br>
          Ingredients:
          <p>{cocktail.ingredients}</p>
          Directions:
          <p>{cocktail.directions}</p>
          <button onClick={handleDelete}>Delete Recipe</button>
        </div>
      )
      
      : <p>Margarita not found</p>
      
};

export default CocktailCard