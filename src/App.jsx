import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import NavBar from './components/NavBar/NavBar'
import { BASE_URL } from './utils/api'


function App() {

  const [countries,setCountries] = useState([])

  useEffect(() =>{
    getCountries()
  },[])

  const getCountries = async () => {
    const res = await fetch(`${BASE_URL}all`)
    const data = await res.json()
    setCountries(data.slice(0,30))
  }

  const getCountriesByName = async (name) => {
    const res = await fetch(`${BASE_URL}name/${name}`)
    const data = await res.json()
    setCountries(data.slice(0,30))
  }

  const getCountriesByRegion =  async (region) => {
    const res = await fetch(`${BASE_URL}region/${region}`)
    const data = await res.json()
    setCountries(data.slice(0,30))
  }

  // const getCountries = () => {
  //   fetch(`${BASE_URL}all`)
  //   .then(response => response.json())
  //   .then(data => setCountries(data.slice(0,30)))
  //   .catch(error => console.log(error))
  // }
  

  return (
    <div className="App">
      <Header/>
      <NavBar getCountriesByName={getCountriesByName} 
              getCountries={getCountries} 
              getCountriesByRegion={getCountriesByRegion}/>
      <MainContent countries={countries}/>
    </div>
  )
}

export default App
