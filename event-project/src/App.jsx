import { useState } from "react";
import "./App.css";

const App = () => {
  const messages = ["Learn React", "Apply for new jobs", "Earn new income"];

  const [step, setStep] = useState(1);

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>

        <p className="message">
          Step {step}: {messages[step - 1]}{" "}
        </p>

        <div className="buttons">
          <button
            onClick={() => step > 1 ? setStep(step - 1) : ""}
            style={{ backgroundColor: "#7950f2", color: "white" }}
          >
            Previous
          </button>
          <button
            onClick={() => step < 3 ? setStep(step + 1) : ""}
            style={{ backgroundColor: "#7950f2", color: "white" }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
