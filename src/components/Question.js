import React, { Fragment, useState } from 'react'

const Question = () => {
  //Definir State
  const [count, setCount] = useState(0)

  //Función que lee el presupuesto
  const handleChange = (e) => {
    setCount(parseInt(e.target.value, 10))
  }

  //Submit para definir presumuesto
  const handleSubmit = (e) => {
      e.preventDefault();

      //Validar

      //Si se pasa la validación
  }
        

  return (
    <Fragment>
      <h2> Coloca tu presupuesto</h2>

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

export default Question
