import { useState } from "react";
export const useCounter = () => {
    const [counter, setCounter] = useState(1);
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
