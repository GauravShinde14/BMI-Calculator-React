import React, { useState } from "react";



export default function Card() {
    const[weight,setWeight] = useState(0);
    const[height,setHeight] = useState(0);
    const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
 
      // Logic for message
        setMessage('your bmi is ' + bmi.toFixed(1));
    
    }
  }
 
    

    function reload(){
        window.location.reload();   
    }
    
  return (
    <div className="container my-5">
      <div className="center">
        <div    >
            <h1 className="center">
                BMI Calculator
            </h1>
        </div>
        <form >
          <div className="mb-3">
            <label to="weigth" className="form-label">
              Weigth (lbs)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your weight"
              id="weigth"input
              value={weight}
              aria-describedby="emailHelp"
              onChange={(e) => setWeight(e.target.value)}
            />
           
          </div>
          <div className="mb-3">
            <label to="height" className="form-label">
             Heigth (in)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your height"
              id="height"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
         
          <button type="submit" className="btn btn-primary" onClick={calcBmi}>
            Submit
          </button>
          <button  type="submit" className="btn btn-primary" onClick={reload}>
            Reload
          </button>
        </form>
        <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
      </div>
    </div>
  );
}
