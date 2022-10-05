import React from 'react'
import './style.css'; 
import { useState } from 'react';


function NewMargarita({onAddMargarita}) {

  const [name, setName] = useState('')
  const [imgURL, setImgURL] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [directions, setDirections] = useState('')
  function handleSubmit(e){
    e.preventDefault()
    const newMarg = {
      name: name,
      ingredients: ingredients,
      directions: directions,
      image: imgURL
    }

    console.log(newMarg)
    onAddMargarita(newMarg)
  }

  return (
<div  className='form-box'>
  <form onSubmit={handleSubmit}>
    <label>Add a Margarita</label>
    <input className='form-input' type="text" name="name" placeholder="Name" onChange={e => setName(e.target.value)}/>
    <input className='form-input' type="text" name="img" placeholder="Image URL" onChange={e => setImgURL(e.target.value)}/>
    <input className='form-input2' type="text" name="ingredients" placeholder="Ingredients" onChange={e => setIngredients(e.target.value)}/>
    <input className='form-input2' type="text" name="directions" placeholder="Directions" onChange={e => setDirections(e.target.value)}/>
    <input type="submit" value="Submit" className='submit'/>
  </form>
</div>
  )
}
export default NewMargarita;