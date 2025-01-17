
import { useState } from 'react'
import './App.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function App() {
  const [calstr, setCalData] = useState('')
  const [inputData, setInputData] = useState('')

  const whenClick = (num) => {
      console.log(num);
      setCalData(prev => prev = prev + num)
      setInputData(prev => prev + num)
      console.log(calstr);

  }

  const calculateString = (calstr) => {
      console.log(calstr);
      const resultofCalculation = eval(calstr)
      setInputData(resultofCalculation)
      setCalData('')

  }

  const whenClear = ()=>{
      setInputData(' ')
  }


  return (
    <>
    <div className='container border' width={'50px'}>
      <h1 className='text-center'>CALCULATOR</h1>
     
        <FloatingLabel controlId="floating" label="input">
          <Form.Control   value={inputData} type="text" placeholder="input" />
        </FloatingLabel>

        <div className='mt-4 d-flex justify-content-evenly' >
        <button onClick={() => whenClick("1")} type="button" class="btn btn-primary me-3">1</button>
        <button type="button" onClick={() => whenClick("2")} class="btn btn-primary me-3">2</button>
        <button type="button" onClick={() => whenClick("3")} class="btn btn-primary me-3">3</button>
        <button type="button" onClick={() => whenClick("4")} class="btn btn-primary me-3">4</button>
        </div>

      <div  className='mt-4 d-flex justify-content-evenly'>
          <button type="button" onClick={() => whenClick("5")} class="btn btn-primary me-3">5</button>
          <button type="button" onClick={() => whenClick("6")} class="btn btn-primary me-3">6</button>
          <button type="button" onClick={() => whenClick("7")} class="btn btn-primary me-3 ">7</button>
          <button type="button" onClick={() => whenClick("8")} class="btn btn-primary me-3">8</button>
      </div>
        <div  className='mt-4 d-flex justify-content-evenly'>
          
          <button type="button" onClick={() => whenClick("9")} class="btn btn-primary me-3">9</button>
          <button type="button" onClick={() => whenClick("0")} class="btn btn-primary me-3">0</button>
          <button type="button" onClick={() => whenClick("+")} class="btn btn-primary me-3">+</button>
          <button type="button" onClick={() => whenClick("-")} class="btn btn-primary me-3">-</button>
        </div>
       <div  className='mt-4 d-flex justify-content-evenly'>
 
          <button type="button" onClick={() => whenClick("*")} class="btn btn-primary me-3">*</button>
          <button type="button" onClick={() => whenClick("/")} class="btn btn-primary me-3">/</button>
          <button type="button" onClick={() => calculateString(calstr)} class="btn btn-primary me-3">=</button>
          <button type="button" onClick={whenClear} class="btn btn-primary me-3">clear</button>
       </div>


       
  
      
      
    </div>
    </>
  )
}

export default App
