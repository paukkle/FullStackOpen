import React, { useState } from 'react'

const Persons = ({ persons, nameFilter} ) => {

  if (nameFilter !== '') {
    persons = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
  }
  return persons.map(person => <div>{person.name} {person.number}</div>)
}

const Filter = ({ handleFilter, newFilter}) => {
  return (
    <form>
      <Input value={newFilter} handleValue={handleFilter} text={'filter shown with'} />
    </form>
  )
}

const PersonForm = ({ addName, newName, handleSetNewName, newNumber, handleSetNewNumber }) => {
  return (
    <form onSubmit={addName}>
      <Input value={newName} handleValue={handleSetNewName} text={"name"} />
      <Input value={newNumber} handleValue={handleSetNewNumber} text={"number"} />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Input = ({ value, handleValue, text }) => {
  return (
    <div>
      {text}: 
      <input value={value}
      onChange={handleValue}
      />
    </div>
  )
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
         setNewNumber('')
  }

  const handleSetNewName = (event) => setNewName(event.target.value)
  
  const handleSetNewNumber = (event) => setNewNumber(event.target.value)
  
  const handleFilter = (event) => SetFilter(event.target.value)


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleSetNewName={handleSetNewName}
        newNumber={newNumber} handleSetNewNumber={handleSetNewNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={newFilter} />
    </div>
  )

}

export default App