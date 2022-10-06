import React from "react";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Routes, Route } from 'react-router-dom'
import DrinkList from "./Components/DrinkList";
import NewCocktail from "./Components/NewCocktail";
import CocktailCard from "./Components/CocktailCard"
import { useState, useEffect } from "react";


function App() {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cocktails")
    .then(r => r.json())
    .then(cocktails => setCocktails(cocktails))
  }, []);


  function addCocktail(newCocktail){
    
    setCocktails([...cocktails,newCocktail])
    
  };

  function deleteRecipe(cocktail) {
    const updatedCocktails = cocktails.filter(ctail => ctail.id !== cocktail.id)
    setCocktails(updatedCocktails)
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        
        <Route path="/cocktails" element={<DrinkList cocktails={cocktails} />} />
        <Route path="/cocktails/:id"element={<CocktailCard cocktails={cocktails} onDrinkDelete={deleteRecipe}/>}/>
        <Route path="/newcocktail" element={<NewCocktail onAddCocktail={addCocktail}/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}
export default App;
