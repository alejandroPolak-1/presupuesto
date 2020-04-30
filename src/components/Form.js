import React, { useState } from 'react'
import Error from './Error'

const Form = () => {
  const [name, setName] = useState('')
  const [count, setCount] = useState(0)
  const [error, setError] = useState(false)

  //Cuando el usuario agrega un gasto
  const handleSubmit = (e) => {
    e.preventDefault()

    //Validar
    if (count < 1 || isNaN(count) || name.trim() === '') {
      setError(true)
      return
    }
    setError(false)
    
    //Construir el gasto

    //Pasar gasto al componente principal

    //resetear Form
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error message="Ambos campos son obligatorios o Presupuesto Incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nombre del Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ejemplo: Transporte"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ejemplo: 100"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
        />
      </div>
    </form>
  )
}

export default Form
