import { useState } from 'react'
import './App.css'

function App() {
  const [height,setheight] = useState("");
  const [weight,setweight] = useState("");
  const [bmi,setbmi] = useState(null);
  const [bmiStatus,setbmiStatus] = useState("");
  const [errorMessage,seterrorMessage] = useState("");
 const caculatorBmi = ()=>{
  const isValidHeight = /^\d+$/.test(height);
  const isValidWeight = /^\d+$/.test(weight);
  if(isValidHeight && isValidWeight){

  }
  if(height && weight){
    const heightInMeter =height / 100;
    const bmivalue = weight / (heightInMeter * heightInMeter);
    setbmi(bmivalue.toFixed(2))
    if(bmivalue < 18){
      setbmiStatus("underweight");
}else if(bmivalue >=18 && bmivalue < 25){
  setbmiStatus("Normal Weight");
}else if(bmivalue >= 25 && bmivalue <30){
  setbmiStatus("Over Weight");
}else{
  setbmiStatus("Obese")
}
seterrorMessage("");
}else{
    setbmi(null);
    setbmiStatus("");
    seterrorMessage("please enter valid number");
  }
 };
const clearAll = ()=>{
  setheight("");
  setweight("");
  setbmi(null);
  setbmiStatus("");
}
  return (
    <>
      <div className='bmi-caculator'>
        <div className='box'></div>
        <div className='data'>
          <h1>BMI Caculator</h1>
         {errorMessage && <p className='error'>{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor='height'>Height (cm):</label>

            <input type="text" value={height} id='height' onChange={(e)=>setheight(e.target.value)} />
          </div>
          <div className="input-container">
            <label htmlFor='weight'>weight (km):</label>
            <input type="text" value={weight} id='weight' onChange={(e)=>setweight(e.target.value)} />
          </div>
          <button onClick={caculatorBmi}>caculator BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi!==null && (
            <div className='result'>
            <p>Your BMI is: {bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div>
          )}
          </div>
      </div>
    </>
  )
}

export default App
