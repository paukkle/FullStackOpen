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

const CountAll = (states) => states.reduce((a, b) => a + b, 0)

const CountAve = (states) => {
  const revSum = states[0] * 1 - states[2] * 1
  const len = CountAll(states)
  if (len === 0) {
    return 0
  }
  else {
    return RoundToOne(revSum / len)
  }
}

const RoundToOne = (number) => Math.round(number * 10) / 10

const Positives = (states) => {
  const len = CountAll(states)
  if (len === 0) {
    return 0
  }
  else {
    return RoundToOne(100 * (states[0] / len))
  }
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
      <td>{props.add}</td>
    </tr>
  )
}

const Statistics = ({ states }) => {
  if (CountAll(states) === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text={"good"} value={states[0]} />
            <StatisticLine text={"neutral"} value={states[1]} />
            <StatisticLine text={"bad"} value={states[2]} />
            <StatisticLine text={"all"} value={CountAll(states)} />
            <StatisticLine text={"average"} value={CountAve(states)} />
            <StatisticLine text={"positive"} value={Positives(states)} add={"%"}/>
          </tbody>
        </table>
      </div>
    )
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
      <Statistics states={states} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)