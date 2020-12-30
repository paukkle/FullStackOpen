import React from 'react'

const Course = ({ course }) => {
  
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <SumExs parts={course.parts} />
      </div>
    )
  }

const Header = ({ name }) => <h2>{name}</h2>

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

export default Course