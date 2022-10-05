import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom'
import DrinkList from "./components/DrinkList";
import NewMargarita from "./components/NewMargarita";
import MargaritaCard from "./components/MargaritaCard"
import { useState, useEffect } from "react";
function App() {
  const [margaritas, setMargaritas] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/margaritas")
    .then(r => r.json())
    .then(margaritas => setMargaritas(margaritas))
  }, [])

console.log(margaritas)
  function addMargarita(newMargarita){
    
    setMargaritas([...margaritas,newMargarita])
    
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/margaritas" element={<DrinkList margaritas={margaritas} />} />
        <Route path="/margaritas/:id"element={<MargaritaCard margaritas={margaritas}/>}/>
       
        <Route path="/newmargarita" element={<NewMargarita onAddMargarita={addMargarita}/>} />
      </Routes>
    </div>
  );
}
export default App;
