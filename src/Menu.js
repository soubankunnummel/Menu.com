
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import MenuList from './MenuList'

function Menu() {
    const [search, setSearch] = useState("")
    const [item, setItem] = useState([])
    // const products = menuItemss.products




    function handleClick() {
        axios.get(`https://api.spoonacular.com/food/menuItems/search?apiKey=48ecf88e0caf4a6880d5ceae93392636&query=${search}`)

            .then(response => {
                setItem(response.data.menuItems)
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })

    }
    const onSubmit = (e) => {
        e.preventDefault()
        handleClick()

    }

    // function handleClick(){
    //     axios.get(`https://api.spoonacular.com/food/products/search?apiKey=48ecf88e0caf4a6880d5ceae93392636&query=${search}`).then(response => {
    //         console.log(response.data);
    //         setMenuItemss(response.data)


    //     })
    // }
    // useEffect (() => {

    // },[])


    //    const menuItems = item.menuItems


            
    return (
        <section>
            <form action="search" onSubmit={onSubmit} >

               <div className='input-find'> <input  type="text"
                    placeholder='search your item...'
                    onChange={(e) => setSearch(e.target.value)} />
                </div>

            </form>
            <div className='serch-btn'>

            <button  onClick={() => handleClick()} >Search</button>
            </div>


            <section className='items'> {item.slice(0,3).map((servings) =>  {
                {console.log(servings);}
                return <div className='item'>
                    <p  key={servings.id}>
                    <h2 className='title-menu'>Title:{servings.title}</h2>
                    <img className='images' src={servings.image} alt="racipieee img" />
                    <h4 className='servings'>Servings: {servings.servingSize} </h4> 
                    <h6>Restaurant Chain:{servings.restaurantChain} </h6>      
                    </p>
                
                </div>
            })}
            
            </section>
            {/* {onSubmit ? navigage('/MenuList') : ''} */}

            {/* <MenuList item={item} /> */}
        </section>

    )
}

export default Menu
