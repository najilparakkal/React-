import React from 'react'

function Employees(props) {
    const {name,age,stack} = props
  return (
    <div>
      <h1>Name:{name} age:{age} stack:{stack}</h1>
    </div>
  )
}

export default Employees

