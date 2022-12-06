import { useState } from 'react'
import React from 'react'
import MealList from './MealList'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Search from './Search'
import Menu from './Menu'


function App() {
  const [mealData,setMealData] = useState(null)
  const [calories,setCalories] = useState(2000)

function handleChange(e){
  setCalories(e.target.value)
}
function handleClick (){
  axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=48ecf88e0caf4a6880d5ceae93392636&timeFrame=day&targetCalories=${calories}`).then(response=> {
    
    setMealData(response.data)
  })
  
}
  return (
    <section className='contruls'>
      <input type="text"
      placeholder='caloris eg: 2000'
      onChange={handleChange}
       />
       <button onClick={handleClick}>
        Get Meal plan
       </button>
       {mealData && <MealList mealData={mealData}/>}
       <Search/>
       <Routes>
        <Route path='/Menu' element={<Menu/>} />
       </Routes>
    </section>
     
      
  )
}

export default App
