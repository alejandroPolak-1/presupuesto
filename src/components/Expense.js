import React from 'react';
import PropTypes from 'prop-types'

const Expense = ({expense}) => (
    <li className="gastos">
        <p>
            {expense.name}

            <span className="gasto">$ {expense.count} </span>
        </p>
    </li>
)

//Documentando
Expense.propTypes = {
    expense: PropTypes.object.isRequired 
}
 
export default Expense;
