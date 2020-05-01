/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import ControlAmount from './components/ControlAmount'

function App() {
  //definiendo el State
  const [amount, setAmount] = useState(0)
  const [residual, setResidual] = useState(0)
  const [showquestion, setShowquestion] = useState(true)
  const [expenses, setExpenses] = useState([])
  const [expense, setExpense] = useState({})
  const [createxpense, setCreateExpense] = useState(false)

  //UseEffect que actualiza el restante
  useEffect(() => {
    if (createxpense) {
      //Agrega el nuevo presupuesto
      setExpenses([...expenses, expense])

      //Resta del Presupuesto actual
      const residualAmount = residual - expense.count
      setResidual(residualAmount)
    }
    //Resetar a false(muy importante)
    setCreateExpense(false)
  }, [expense, setExpense, expenses, residual])

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
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <ControlAmount amount={amount} residual={residual} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
