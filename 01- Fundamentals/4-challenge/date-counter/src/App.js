import { useState } from "react";


function App() {



  return (
    <div className="App">
      <Counter />
    </div>
  );
}


function Counter() {
  const [counter, setCounter] = useState(0);
  function reduceCounter() {
    // if (counter > 1) {
    setCounter((s) => s - step);
    // }
  }
  function increaseCounter() {
    setCounter((s) => s + step);
  }
  //
  const [step, setStep] = useState(0);
  function reduceStep() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function increaseStep() {
    setStep((s) => s + 1);
  }

  const date = new Date("July 17 2024");
  date.setDate(date.getDate() + counter);
  return (
    <>
      <div>
        <button onClick={reduceStep}>-</button>
        <p>Step: {step}</p>
        <button onClick={increaseStep}>+</button>
      </div>
      <div>
        <button onClick={reduceCounter}>-</button>
        <p>Count: {counter}</p>
        <button onClick={increaseCounter}>+</button>
      </div>

      <p>
        <span>
          {
            counter === 0
              ? "Today is " : counter > 0 ? `${counter} days from today is`
                : `${Math.abs(counter)} days ago was `
          }
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  )
}

export default App;
