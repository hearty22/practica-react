// import { useCounter } from "./hooks/useCounter";
// import { useFetch } from "./hooks/useFetch";
// import { Loading } from "../components/Loading";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";
import '../css/CharacterInfo.css';

export const CharacterInfo = () => {
  const { counter, handleDecrementCounter, handleIncrementCounter } =
    useCounter(1);

  let { characterData, isLoading, hasError } = useFetch(counter);
  const { name, gender, age, occupation } = characterData;
  return (
      <div>
      <div className="data-container">
        <div className="character-card">
          {isLoading && <Loading />}
          {hasError && <p className="error">Error al cargar el personaje.</p>}
          {!isLoading && !hasError && (
            <h3 className="data-item">name: {name ? name : "?"}</h3>
          )}
          {!isLoading && !hasError && (
            <h3 className="data-item">gender: {gender ? gender : "?"}</h3>
          )}
          {!isLoading && !hasError && (
            <h3 className="data-item">age: {age ? age : "?"}</h3>
          )}
          {!isLoading && !hasError && (
            <h3 className="data-item">
              occupation: {occupation ? occupation : "?"}
            </h3>
          )}
        </div>
        <div className="image-card">
          <img
            className="character-img"
            src={`https://cdn.thesimpsonsapi.com/500/character/${counter}.webp`}
            alt={name}
          />
        </div>
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
