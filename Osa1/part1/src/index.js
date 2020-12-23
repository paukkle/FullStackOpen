import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const Hello = ({name, age}) => {  //tiedonvälitys propsin avulla, props muutetaan suoraan muuttujiksi
  const bornYear = () => new Date().getFullYear() - age
  
  return <div>
    <p>
      Hello {name}, you are {age} years old
    </p>
    <p>
      You were born in {bornYear()}
    </p>
  </div>
}

const Footer = () => {
  return (
    <>
      greeting app created by
      <br />
      <a href="https://github.com/paukkle/">paukkle</a>
    </>
  )
}


const App = (props) => {
  const [counter, setCounter] = useState(0)
  const nimi = "Kärki"
  const ika = 87

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  console.log("Renderöi...", counter)

  return ( //Alla tyhjä juurielementti <> // Tapahtumankäsitteljä
    <>
      <h1>Greetings
        <Display counter={counter} />
      </h1>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text="zero"
      />
      <Button
        handleClick={decreaseByOne}
        text="minus"
      />
      <Hello name="Arvo" age={22 - 4}/>
      <Hello name={nimi} age={ika}/>
      <Footer />
    </>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))

