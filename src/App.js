import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState({});
  const [loading, isLoading] = useState(true);
  const [active, setActive] = useState(true);

  const getAdvice = async () => {
    const req = await fetch("https://api.adviceslip.com/advice");
    const data = await req.json();
    setAdvice(data);
    isLoading(false);
  };

  useEffect(() => {
    isLoading(true);
    getAdvice();
  }, []);

  if (loading) {
    return <p className="title"> advice incoming... </p>;
  }
  return (
    <div className="App">
      <div className="container">
        <h4 className="title">ADVICE #{advice.slip.id}</h4>
        <p className="advice">{advice.slip.advice}</p>
        <svg
          className="devider"
          width="295"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        <button className="button" onClick={getAdvice}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
