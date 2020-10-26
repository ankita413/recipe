import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Recipe from './Recipe';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const APP_ID = "f6ab8b29";
  const APP_KEY = "25c1acc296bd315c3aa4febbeab53e15";
// Declare state as an empty array bcoz recipe and its data are present in a array 
const[recipes,setRecipes] =useState([]);
const[search,setSearch] = useState("");
const[searchSubmit,setSearchSubmit] = useState('cake'); //set ice-cream as default value
//call the getREcipes fxn when the page renders for the first time
useEffect(() => {
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${searchSubmit}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    }
    getRecipes();
},[searchSubmit])
// getRecipes fxn 

const getSearch = (e) => {
  e.preventDefault(); //to stop the page refresh
  setSearchSubmit(search);
  setSearch("");
}
//the event e here is a event whenever the input text in the search bar changes
const updateSearch = (e) => {
setSearch(e.target.value);
}
 return(
  <div className ="App">
    <form onSubmit = {getSearch} className="search-bar">
      <input className="search-field" type ="text" value={search} onChange={updateSearch}/>
      <button className="search-btn" type="submit">Search</button>
    </form>
    <div className="recipes">
    {
      recipes.map(recipe => (   //for each recipe in the recipes array create a recipe component
      <Recipe 
      key = {uuidv4()}
      title = {recipe.recipe.label} 
      calories = {recipe.recipe.calories} 
      image = {recipe.recipe.image}
      ingredients = {recipe.recipe.ingredients}/>
    ))}
    </div>
  </div>
)
}
export default App;
