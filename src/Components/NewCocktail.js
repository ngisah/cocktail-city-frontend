import React from 'react'
import './style.css'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function NewCocktail({onAddCocktail}) {

  const [name, setName] = useState('')
  const [imgURL, setImgURL] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [directions, setDirections] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    const newCocktail = {
      name: name,
      ingredients: ingredients,
      directions: directions,
      image: imgURL
    }

    fetch("http://localhost:3000/cocktails", {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newCocktail)
      })
      .then(r => r.json())
      .then(cocktail => {
      onAddCocktail(cocktail)
      navigate("/cocktails")
    })
  };

  return (
<div  className='form-box'>
  <form onSubmit={handleSubmit}>
    <label>Add a Cocktail</label>
    <input className='form-input' type="text" name="name" placeholder="Name" onChange={e => setName(e.target.value)}/>
    <input className='form-input' type="text" name="img" placeholder="Image URL" onChange={e => setImgURL(e.target.value)}/>
    <textarea className='form-input2' type="text" name="ingredients" placeholder="Ingredients" onChange={e => setIngredients(e.target.value)}/>
    <textarea className='form-input2' type="text" name="directions" placeholder="Directions" onChange={e => setDirections(e.target.value)}/>
    <input type="submit" value="Submit" className='submit'/>
  </form>
</div>
  )
}
export default NewCocktail;