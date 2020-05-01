import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Question = ({ setAmount, setResidual, setShowquestion }) => {
  //Definir State
  const [count, setCount] = useState(0)
  const [error, setError] = useState(false)

  //Función que lee el presupuesto
  const handleChange = (e) => {
    setCount(parseInt(e.target.value, 10))
  }

  //Submit para definir presumuesto
  const handleSubmit = (e) => {
    e.preventDefault()

    //Validar
    if (count < 1 || isNaN(count)) {
      setError(true)
      return
    }

    //Si se pasa la validación
    setError(false)
    setAmount(count)
    setResidual(count)
    setShowquestion(false)
  }

  return (
    <Fragment>
      <h2> Coloca tu presupuesto</h2>

      {error ? <Error message="El Presupuesto es Incorrect" /> : null}

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  )
}

//Documentando
Question.propTypes={
  setAmount: PropTypes.func.isRequired, 
  setResidual: PropTypes.func.isRequired, 
  setShowquestion: PropTypes.func.isRequired
}

export default Question
