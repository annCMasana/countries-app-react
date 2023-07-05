import React,{useState} from 'react'
import { BiSearchAlt } from "react-icons/bi";
import "./SearchBar.css"

const SearchBar = ({getCountriesByName,getCountries}) => {
    const [text,setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text == ''){
            getCountries()
        } else{
            getCountriesByName(text)
        }
    }

  return (
    <div className='search-box'>
        <BiSearchAlt size={25} color="white"/>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='search country...' value={text} onChange={(e) => setText(e.target.value)} />
        </form>
    </div>
  )
}

export default SearchBar