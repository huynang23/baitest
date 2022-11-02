import { useState } from "react"


const InputShortener = ({setInputValue}) => {

    const [value, setValue] = useState("")
    
    const handleClick = () =>{

     setInputValue(value)
     setValue("");
    }
  return (
    <div className="container">
        <h1>Link Shortener</h1>
        <div>
            <label>Enter the link:</label>
            <input 
            type="text" 
            placeholder="Enter Link"
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            />
            <button onClick={handleClick}>Click</button>
        </div>

    </div>
  )
}

export default InputShortener