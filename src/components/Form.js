import React, { useState } from 'react'

const Form = () => {
  return (
    <form>
      <h2>Agrega tus gastos aquí</h2>

      <div className="campo">
        <label>Nombre del Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ejemplo: Transporte"
        />
      </div>

      <div className="campo">
        <label>Cantidad</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ejemplo: 100"
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
