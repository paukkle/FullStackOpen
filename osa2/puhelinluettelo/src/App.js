import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1231244' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }

    persons.map(person => person.name).includes(newName)
       ? alert(`${newName} is already added to phonebook`)
       : setPersons(persons.concat(nameObject))
         setNewName('')
    
  }

  const handleSetNewName = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleSetNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input value={newName}
          onChange={handleSetNewName}
          />
        </div>
        <div>
          number:
          <input value={newNumber}
          onChange={handleSetNewNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )

}

export default App