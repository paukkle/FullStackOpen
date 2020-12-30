import React from 'react';
import ReactDOM from 'react-dom';


const Course = ({ course }) => {

  const Header = ({ name }) => <h1>{name}</h1>

  const Part = (props) => <p>{props.part} {props.exs}</p>

  const SumExs = ({ parts }) => {
    let total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <b>total of {total} exercises</b>
    )
  }

  const Content = ({ parts }) => {
    return (
      parts.map(part =>
        <Part key={part.id}
          part={part.name} exs={part.exercises}
        />
      )
    )
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <SumExs parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1, 
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "State of me",
        exercises: 2,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));