import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Menu from './Menu'

function Search() {
    const navigate = useNavigate()
    return (
        <div>
            <button className='go-search-button' onClick={() => navigate("/Menu")}>Find your item </button>
            <Routes>
                <Route componet={Menu} element={<Menu />} />
            </Routes>
        </div>
    )
}

export default Search
