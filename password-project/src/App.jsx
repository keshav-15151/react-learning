import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, numberAllowed] = useState(false)
  const [characters, charAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //password Generator function 
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if (number) str+="1234567890"
    if (characters) str+= "!@#$%^&*()<>?~_"
    for (let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    } 
    setPassword(pass)

  }, [length, number, characters, setPassword])

  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  

  useEffect(()=>{passwordGenerator()},[length,number,characters,passwordGenerator])

  //ref Hook
  const passwordRef = useRef(null)

  return (
    <>
      <div className='text-orange-500 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 pb-4  bg-gray-700'>
        <h1 className='text-white text-center pb-3 pt-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type = "range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 ml-3'>
            <input type="checkbox" defaultChecked={number} id="numberInput" onChange={()=> {numberAllowed((prev) => !prev)}} />
            <label htmlFor="NumberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={characters} id="charInput" onChange={()=> {charAllowed((prev) => !prev)}} />
            <label htmlFor="CharactersInput">Characters</label>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
