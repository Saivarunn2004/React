import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumber]=useState(false);
  const [charAlowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("")

  //useRef hook
  const passwordref=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAlowed) str+="!@#$%^&*`~-_+="
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str[char]
    }

    setPassword(pass)

  },[length,numberAllowed,charAlowed,setPassword]) //This all are dependencies,if anything changes it will run again

  // passwordGenerator() - cannot do like this

  const copyPassword=useCallback(()=>{
    passwordref.current?.select(); //'?' for optionally select,bcz it may be NULL
    // passwordref.current?setSelectionRange(0,20);-To Select Range,but not working
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{ //Another hook
    passwordGenerator()
  },[length,numberAllowed,charAlowed,passwordGenerator]) //This all are dependencies,if anything changes it will run again

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg
    px-4 my-8 text-orange-500 bg-gray-800">
      <h1 className='text-white text-center'>Password</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 text-white'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordref}
        />
        <button onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-2 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range'
          min={8}
          max={16}
          value={length}
          className='cursor'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumber((prev)=>!prev) //One Method
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAlowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed(!charAlowed) //Another method
            }}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App