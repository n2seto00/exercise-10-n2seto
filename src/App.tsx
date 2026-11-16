import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState('')
  const [vat, setVat] = useState<number | null>(null)
  const [total, setTotal] = useState<number | null>(null)

  const calculateVat = () => {
    const price = Number(amount)

    if (!price) {
      setVat(null)
      setTotal(null)
      return
    }

    const vatAmount = price * 0.255
    const totalAmount = price + vatAmount

    setVat(vatAmount)
    setTotal(totalAmount)
  }

  return (
    <main>
      <h1>Vat Calculator</h1>

      <label>
        Amount (€):
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>

      <button onClick={calculateVat}>
        Calculate VAT
      </button>

      {vat !== null && total !== null && (
        <p>
          VAT (€): {vat.toFixed(2)}, Total (€): {total.toFixed(2)}
        </p>
      )}
    </main>
  )
}

export default App