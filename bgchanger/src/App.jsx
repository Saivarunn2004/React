import { useState } from 'react'
import './index.css'


function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3
        shadow-lg bg-white px-3 py-2 rounded-3xl" >
          <button onClick={()=>setColor("red")}
          className="bg-red-500 hover:bg-red-700">Red</button>
          <button onClick={()=>setColor("green")}
          className="bg-green-500 hover:bg-green-700">Green</button>
          <button onClick={()=>setColor("blue")}
          className="bg-blue-500 hover:bg-blue-700">Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
