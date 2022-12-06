import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Meal({meal}) {
  const [imageUrl,setImageUrl]  = useState("")
  useEffect (() => {
    axios.get(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=48ecf88e0caf4a6880d5ceae93392636&includeNutrition=false`).then(response => {
     
      setImageUrl(response.data.image)
    })
  },[meal.id])
  
  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="Racipe" />
      <ul className='instuctions'>
      <h4>Rady in munuts :{meal.readyInMinutes}</h4>
      <h4>Servins :{meal.servings} </h4>
      </ul>
      <a href={meal.sourceUrl}>Go to Racipe</a>
    </article>

  )
}

export default Meal
