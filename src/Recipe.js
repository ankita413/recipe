import React, { useState } from 'react';
import  './styles/recipe.css';
import Recipeingredient from './ingredient';
const Recipe = ({title,calories,image,ingredients}) => {
const [show,setShow] = useState(false);


return(
<div className="recipe">

    <h3>{title}</h3>
    <p>Calories: {Math.floor(calories)}</p>
    <img src={image} alt = {title}  ></img>
    <button onClick={() => setShow(!show)}>Ingredients</button>
   {show && <Recipeingredient ingredients = {ingredients}/>}
</div>
 
);


}
export default Recipe;