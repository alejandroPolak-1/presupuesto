import React, {useState} from 'react'
import Question from './components/Question'

function App() {

  //definiendo el State
const [amount, setAmount] = useState(0);
const [residual, setResidual] = useState(0)

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          <Question 
            setAmount={setAmount}
            setResidual={setResidual}
          />
        </div>
      </header>
    </div>
  )
}

export default App
