import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const ShowState = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.state}
      </p>
    </div>
  )
}

const CountAll = (states) => states.reduce((a, b) => a + b, 0)

const CountAve = (states) => {
  const revSum = states[0] * 1 - states[2] * 1
  const len = CountAll(states)
  if (len === 0) {
    return 0
  }
  else {
    return revSum / len
  }
}

const Positives = (states) => {
  const len = CountAll(states)
  if (len === 0) {
    return 0
  }
  else {
    return 100 * (states[0] / len)
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const states = [good, neutral, bad]

  const increaseByOne = ( setFun, state ) => {
    setFun(state + 1)
  }


  return (
    <div>
      <Header text={"give feedback"} />
      <Button handleClick={() => increaseByOne(setGood, good)} text={"good"} />
      <Button handleClick={() => increaseByOne(setNeutral, neutral)} text={"neutral"} />
      <Button handleClick={() => increaseByOne(setBad, bad)} text={"bad"} />
      <Header text={"statistics"} />
      <ShowState text={"good"} state={good} />
      <ShowState text={"neutral"} state={neutral} />
      <ShowState text={"bad"} state={bad} />
      <p>
        all {CountAll(states)}
      </p>
      <p>
        average {CountAve(states)}
      </p>
      <p>
        positive {Positives(states)} %
      </p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)