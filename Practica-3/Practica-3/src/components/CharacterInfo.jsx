import React, { useState } from "react";
import "./CharacterInfo.css";
import { useFetch } from "../hooks/useFetch";
export const CharacterInfo = () => {
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
  
  let { characterData, isLoading, hasError } = useFetch(counter);
  const { name, gender, age, occupation } = characterData;
  return (
    <div>
      <div className="data-container">
        <div className="grid-container">
          {isLoading && <p className="loading">Cargando personaje...</p>}
          {hasError && <p className="error">Error al cargar el personaje.</p>}
          {!isLoading && !hasError && (
            <h3 className="data-item">name: {name}</h3>
          )}
          {!isLoading && !hasError && (
            <h3 className="data-item">gender: {gender}</h3>
          )}
          {!isLoading && !hasError && <h3 className="data-item">age: {age}</h3>}
          {!isLoading && !hasError && (
            <h3 className="data-item">occupation: {occupation}</h3>
          )}
        </div>
        <div className="grid-container-image"><img src={`https://cdn.thesimpsonsapi.com/200/character/${counter}.webp`} alt={name} /></div>
      </div>
      <div className="grid-container-counter">
        <button
          onClick={handleDecrementCounter}
          disabled={isLoading || counter == 1}
        >
          -1
        </button>
        <button onClick={handleIncrementCounter} disabled={isLoading}>
          +1
        </button>
      </div>
    </div>
  );
};
