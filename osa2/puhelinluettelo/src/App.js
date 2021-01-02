import React, { useState } from 'react'

const Persons = ({ persons, nameFilter} ) => {

  if (nameFilter !== '') {
    persons = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
  }
  return persons.map(person => <div>{person.name} {person.number}</div>)
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, SetFilter ] = useState('')

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

  const handleSetNewName = (event) => setNewName(event.target.value)
  
  const handleSetNewNumber = (event) => setNewNumber(event.target.value)
  
  const handleFilter = (event) => SetFilter(event.target.value)


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with
          <input value={newFilter}
          onChange={handleFilter}
          />
        </div>
      </form>
      <h2>add a new</h2>
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
      <Persons persons={persons} nameFilter={newFilter} />
    </div>
  )

}

export default App