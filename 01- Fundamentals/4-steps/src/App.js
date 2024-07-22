import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  )
}
function Steps() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // if (step > 1) setStep(step - 1);
    if (step > 1) { setStep((s) => s - 1); }
  }

  function handleNext() {
    // if (step < 3) setStep(step + 1);
    if (step < 3) { setStep((s) => s + 1); }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button textColor="#333" bgColor="#e7e7e7" onClick={() => alert(messages[step - 1])}>
                Learn More
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">

            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious} >
              <span>👈 Previous</span>
            </Button>

            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )
      }
    </div >
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <p>Step {step}</p>
      {children}
    </div>
  )
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}>{children}</button>
  )
}


//Children Props

