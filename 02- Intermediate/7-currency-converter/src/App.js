import { useEffect, useState } from "react"
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
export default function App() {
  const [amount, setAmount] = useState("")
  const [fromCurr, setFromCurr] = useState("EUR");
  const [toCurr, setToCurr] = useState("USD");
  const [converted, setConverted] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function handleChange() {
      setIsLoading(true);
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurr}&to=${toCurr}`);
      // if (!res.ok) {
      //   throw new Error("Something went wrong with the fetching of movies");
      // }
      const data = await res.json();
      setConverted(data.rates[toCurr]);
      setIsLoading(false);
    }
    if (fromCurr === toCurr) return setConverted(amount)
    handleChange();
  }, [amount, fromCurr, toCurr])



  return (
    <div>
      <input type="text" onChange={(e) => setAmount(Number(e.target.value))} value={amount} disabled={isLoading} />
      <select onChange={(e) => setFromCurr(e.target.value)} value={fromCurr} disabled={isLoading} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setToCurr(e.target.value)} value={toCurr} disabled={isLoading} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT: {converted}</p>
    </div>
  );
}
