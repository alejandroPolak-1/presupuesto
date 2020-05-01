import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { checkAmount } from './Helpers'

const ControlAmount = ({ amount, residual }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: $ {amount}</div>

      <div className={checkAmount(amount, residual)}>
        Restante: $ {residual}
      </div>
    </Fragment>
  )
}

//Documentando
ControlAmount.propTypes = {
  amount: PropTypes.number.isRequired,
  residual: PropTypes.number.isRequired,
}

export default ControlAmount
