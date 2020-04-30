import React, {Fragment} from 'react';

const ControlAmount = ({amount, residual}) => {
    return (  
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {amount}
            </div>

            <div className="alert">
                Restante: $ {residual}
            </div>
        </Fragment>
    );
}
 
export default ControlAmount;