import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css"

const Filter = ({ handleFilter, newFilter }) => {
  return (
    <form>
      <Input value={newFilter} handleValue={handleFilter} text={'find countries'} />
    </form>
  )
}

const Input = ({ value, handleValue, text }) => {
  return (
    <div>
      {text}
      <input value={value}
      onChange={handleValue}
      />
    </div>
  )
}

const ShowCountries = ({ countries, filter, handleClick } ) => {
  const filtered = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
  const nCountries = filtered.length

  if (nCountries === 1) {
    return <CountryInfo country={filtered[0]} />
  }
  if (nCountries > 10 || filter === '') {
    return <div>too many to show</div>
  }
  else if (1 < nCountries && nCountries <= 10) {
    return filtered.map(country => <div key={country.name}>{country.name} <ShowButton handleClick={handleClick} country={country.name}/></div>)
  }
  else if (nCountries === 0) {
    return <div>no results</div>
  }
}


const CountryInfo = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      <br></br>
      <img src={country.flag} alt={country.name} className="App-image"/>      
    </div>
  )
}

const ShowButton = ({ handleClick, country }) => <button onClick={() => handleClick(country)}>show</button>


const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')

  const handleFilter = (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }
  

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
    console.log('fulfilled')
    setCountries(response.data)
    })
  }, [])

  return (
    <div>
      <Filter handleFilter={handleFilter} newFilter={newFilter} />
      <ShowCountries countries={countries} filter={newFilter} handleClick={setNewFilter}/>
    </div>
    
  )
}

export default App;
