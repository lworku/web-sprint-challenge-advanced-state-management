import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions'

function Form(props){
  const [individual, setIndividual] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  })

  const handleChange = (e) => {
    setIndividual({
      ...individual,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addSmurf(individual)
    setIndividual({
      name: "",
      age: "",
      height: "",
      id: ""
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <input name='name' placeholder='nombre' onChange={handleChange} value={individual.name}/>
      <input name='age' placeholder='edad' onChange={handleChange} value={individual.age}/>
      <input name='height' placeholder='altura' onChange={handleChange} value={individual.height}/>
      <button type='submit'> Añadir </button>
    </form>
  )
}

export default connect(null, { addSmurf })(Form)