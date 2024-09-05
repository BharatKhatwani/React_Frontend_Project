import { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8); // For password length
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Include numbers if allowed
    if (numberAllowed) str += "0123456789";

    // Include special characters if allowed
    if (characterAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    // Generate password based on length
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    // Set the generated password
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center mb-4 my-3'>Password Generator</h1>
        
        {/* Password Display */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password} 
            className="outline-none w-full py-2 px-3 text-black" 
            placeholder='Generated password' 
            readOnly 
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
<div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input 
    type = "range"
    min = {6} 
    max = {100}
    value = {length}
    onChange = {(e) => setLength(e.target.value)}
    > </input>
    <label >length : { length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input
    type = "checkbox" 
    defaultChecked ={numberAllowed}
    id ="numberInput" 
    onChange={()=>{
      setNumberAllowed((prev) => !prev);
    }}
    ></input>
    <label htmlFor='numberInput'>Numbers</label>
  </div>

  <div className='flex items-center gap-x-1'>
    <input
    type = "checkbox" 
    defaultChecked ={characterAllowed}
    id ="characterInput" 
    onChange={()=>{
      setNumberAllowed((prev) => !prev);
    }}
    ></input>
    <label htmlFor='numberInput'>Character</label>
  </div>
</div>
        {/* Button to generate password */}
        <div className="text-center">
          
        </div>
      </div>
    </>
  );
}

export default App;
