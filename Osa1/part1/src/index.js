import React, {useState} from 'react';
import ReactDOM from 'react-dom';


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

  console.log("Renderöi...", counter)

  return ( //Alla tyhjä juurielementti <>
    <>
      <h1>Greetings, {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}>
        zero
      </button>
      <Hello name="Arvo" age={22 - 4}/>
      <Hello name={nimi} age={ika}/>
      <Footer />
    </>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))

