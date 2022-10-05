import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom'
import DrinkList from "./components/DrinkList";
import NewCocktail from "./components/NewCocktail";
import CocktailCard from "./components/CocktailCard"
import { useState, useEffect } from "react";
function App() {
  const [cocktails, setCocktails] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/cocktails")
    .then(r => r.json())
    .then(cocktails => setCocktails(cocktails))
  }, [])

console.log(cocktails)
  function addCocktail(newCocktail){
    
    setCocktails([...cocktails,newCocktail])
    
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/cocktails" element={<DrinkList cocktails={cocktails} />} />
        <Route path="/cocktails/:id"element={<CocktailCard cocktails={cocktails}/>}/>
       
        <Route path="/newcocktail" element={<NewCocktail onAddCocktail={addCocktail}/>} />
      </Routes>
    </div>
  );
}
export default App;
