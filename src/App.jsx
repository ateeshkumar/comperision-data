import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [eipData, setEipData] = useState({});
  const [poaData, setPoaData] = useState({});

  const [eipInput, setEipInput] = useState("");
  const [poaInput, setPoaInput] = useState("");
  const fields = [
  "userId",
  "createdTimestamp",
  "userDetails",
  "userStateDetails",
  "employmentStatus",
  "legalDocuments",
  "addresses",
  "tags",
];

const handleParse = () => {
    try {
      if (eipInput.trim()) {
        setEipData(JSON.parse(eipInput));
      }
      if (poaInput.trim()) {
        setPoaData(JSON.parse(poaInput));
      }
    } catch (err) {
      alert("Invalid JSON format. Please check your input.");
    }
  };
   const formatValue = (val) => {
    if (val === undefined) return "";
    if (typeof val === "object") {
      return JSON.stringify(val, null, 2); // pretty-print objects/arrays
    }
    return String(val);
  };
  return (
    <>
       <div className="compare-container">
      {/* Top Section */}
      <div className="compare-header">
        <div>
          <textarea
          className="textbox eip"
          placeholder="Paste EIP JSON here"
          value={eipInput}
          onChange={(e) => setEipInput(e.target.value)}
        />
          <h2>EIP</h2>
        </div>
        
        
        <button className="compare-btn" onClick={handleParse}>Compare</button>
        <div>
          <textarea
          className="textbox poa"
          placeholder="Paste POA JSON here"
          value={poaInput}
          onChange={(e) => setPoaInput(e.target.value)}
        />
          <h2 style={{color: 'red'}}>POA</h2>
        </div>
        
      </div>

      {/* Field Comparison */}
      <div className="compare-body">
        {fields.map((field) => (
          <div key={field} className="compare-row">
            <div className="field-label">{field}</div>
            <textarea
              className="field-box eip"
              value={formatValue(eipData[field])}
              readOnly
            />
            <textarea
              className="field-box poa"
              value={formatValue(poaData[field])}
              readOnly
            />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
