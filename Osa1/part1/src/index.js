import React from 'react';
import ReactDOM from 'react-dom';


const Hello = (props) => {  //tiedonvälitys propsin avulla
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
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

const App = () => {
  const nimi = "Kärki"
  const ika = 87
  console.log("Pitäisi tulostua (Arvo, 18) ja (Kärki, 87)")
  return ( //Alla tyhjä juurielementti <>
    <>
      <h1>Greetings</h1>
      <Hello name="Arvo" age={22 - 4}/>
      <Hello name={nimi} age={ika}/>
      <Footer />
    </>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))

