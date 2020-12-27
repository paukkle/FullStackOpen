import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Anecdote = ( props ) => {
  return (
    <div>
      {props.anecdotesArr[props.selectedAne]}
    </div>
  )
}

const IndexOfMax = ( arr ) => {
    let max = arr[0]
    let maxIndex = 0

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
        maxIndex = i
      }
    }
    return maxIndex
}

const ShowVotes = ( props ) => <div>has {props.points[props.selected]} votes </div>

const ReturnRandom = ( len ) => Math.floor(Math.random() * len)

const App = ( props ) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(props.anecdotes.length+1).join('0').split('').map(parseFloat))

  const handleSet = ( anecdotes ) => setSelected(ReturnRandom(anecdotes.length))

  const handlePoints = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <Anecdote anecdotesArr={props.anecdotes} selectedAne={selected} />
      <ShowVotes points={points} selected={selected} />
      <Button handleClick={() => handlePoints()} text={"vote"} />
      <Button handleClick={() => handleSet(props.anecdotes)} text={"next anecdote"}/>
      <Header text={"Anecdote with most votes"} />
      <Anecdote anecdotesArr={props.anecdotes} selectedAne={IndexOfMax(points)} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)