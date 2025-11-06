import { useState } from "react";
export const useCounter = (initialValue) => {
    const [counter, setCounter] = useState(initialValue);
    const handleIncrementCounter = () => {
      setCounter(counter + 1);
    };
    const handleDecrementCounter = () => {
      if (counter <= 1) {
        return;
      }
      setCounter(counter - 1);
    };
    return{
        counter,
        handleDecrementCounter,
        handleIncrementCounter
    }
}
