import React from 'react'
import Filter from '../Filter/Filter'
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'

const Navbar = ({getCountriesByName,getCountries,getCountriesByRegion}) => {
  return (
    <div className='navbar'>
        <SearchBar getCountriesByName={getCountriesByName} 
                   getCountries={getCountries}/>
        <Filter getCountriesByRegion={getCountriesByRegion}/>
    </div>
  )
}

export default Navbar