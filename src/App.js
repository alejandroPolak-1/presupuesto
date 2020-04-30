import React, { useState } from 'react'
import Question from './components/Question'
import Form from './components/Form'

function App() {
  //definiendo el State
  const [amount, setAmount] = useState(0)
  const [residual, setResidual] = useState(0)
  const [showquestion, setShowquestion] = useState(true)
  const [expenses, setExpenses] = useState([])

  //Cuando agregamos un nuevo Gasto
  const addNewExpense = expense => {
    setExpenses([
      ...expenses,
      expense
    ])
  }


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {showquestion ? (
            <Question
              setAmount={setAmount}
              setResidual={setResidual}
              setShowquestion={setShowquestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form 
                addNewExpense={addNewExpense}
                />
              </div>
              <div className="one-half column">2</div>
            </div>

          )}
        </div>
      </header>
    </div>
  )
}

export default App
