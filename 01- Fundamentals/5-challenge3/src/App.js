import { useState } from "react"

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const handleReset = () => {
    setBill(0);
    setTip1(0);
    setTip2(0);
  };

  return (
    <div className="App">
      <Bill bill={bill} onBill={setBill} />
      <Service tip={tip1} onTip={setTip1}>
        <p> How did you like the service?</p>
      </Service>
      <Service tip={tip2} onTip={setTip2}>
        <p> How did you like the service second?</p>
      </Service>
      <Total bill={bill} tip1={tip1} tip2={tip2} />
      <Reset onReset={handleReset} />
    </div>
  );
}

function Bill({ bill, onBill }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input type="text" value={bill} onChange={(e) => onBill(Number(e.target.value))}></input>
    </div>
  );
}

function Service({ tip, onTip, children }) {
  return (
    <div>
      {children}
      <Select tip={tip} onTip={onTip} />
    </div>
  );
}

function Total({ bill, tip1, tip2 }) {
  const totalTips = ((bill * tip1) / 100) + ((bill * tip2) / 100);
  const totalBill = bill + totalTips;
  return (
    <div>
      <p>You pay (${bill} + ${totalTips.toFixed(2)} tip) = ${totalBill.toFixed(2)}</p>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

function Select({ tip, onTip }) {
  return (
    <div>
      <select value={tip} onChange={(e) => onTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}> It was okay (5%)</option>
        <option value={10}> It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
