
import { useState } from 'react';
import './App.css';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="app">
  <InputShortener setInputValue={setInputValue}/>

  <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;
