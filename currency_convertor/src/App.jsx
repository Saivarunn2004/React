import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {

  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertAmount,setConvertedAmount]=useState(0);

  const currencyInfo=useCurrencyinfo(from)

  const options=Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertAmount)
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
        <div className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" 
     style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2017/03/28/12/03/bog-2181897_1280.jpg)` }}>
  
  <div className="w-full max-w-md mx-auto border border-white/20 rounded-xl p-6 backdrop-blur-md bg-white/30 shadow-lg">
    
    <form onSubmit={(e) => {
      e.preventDefault();
      convert();
    }}>

      {/* From Input */}
      <div className="w-full mb-3">
        <label className="block text-gray-700 font-semibold mb-1">From</label>
        <div className="flex items-center bg-white rounded-lg p-2 shadow-md">
          <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-2 border-none outline-none text-lg text-black"
          />
          <select 
            value={from} 
            onChange={(e) => setFrom(e.target.value)}
            className="p-2 bg-black-200 rounded-md ml-2 text-black"
          >
            {options.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Swap Button with Line */}
      <div className="relative w-full flex items-center justify-center my-3">
        <div className="absolute w-full h-0.5 bg-gray-400"></div>
        <button type="button" 
                className="relative z-10 px-4 py-1 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
                onClick={swap}>
          Swap
        </button>
      </div>

      {/* To Input */}
      <div className="w-full mb-3">
        <label className="block text-gray-700 font-semibold mb-1">To</label>
        <div className="flex items-center bg-white rounded-lg p-2 shadow-md">
          <input 
            type="text"
            value={convertAmount}
            readOnly
            className="w-full p-2 border-none outline-none text-lg bg-gray-100 text-black"
          />
          <select 
            value={to} 
            onChange={(e) => setTo(e.target.value)}
            className="p-2 bg-black-200 rounded-md ml-2 text-black"
          >
            {options.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Convert Button */}
      <button type="submit" 
              className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700">
        Convert {from} to {to}
      </button>

    </form>
  </div>

</div>
    </>
  )
}

export default App
