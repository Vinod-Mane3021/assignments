import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

const factorial = (input) => {
  console.log("factorial function is called")
  if(!input) {
    return;
  }
  let value = 1;
  for(let i=1; i<= input; i++) {
    value *= i;
  }
  return value;
}

export function Assignment1() {
    const [inputValue, setInputValue] = useState(0);
    console.log("Assignment 1 rerendered")
    // Your solution starts here
    const expensiveValue = useMemo(() => {
      return factorial(inputValue);
    }, [inputValue])

    return (
        <div>
            <input 
                type="number"   
                value={inputValue} 
                onChange={(e) => setInputValue(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}