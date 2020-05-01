import React, { Fragment } from 'react'
import { checkAmount } from './Helpers'

const ControlAmount = ({ amount, residual }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: $ {amount}</div>

      <div className={checkAmount(amount, residual)}>Restante: $ {residual}</div>
    </Fragment>
  )
}

export default ControlAmount
