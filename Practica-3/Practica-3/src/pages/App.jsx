import React from 'react';
import './App.css';
import { CharacterInfo } from '../components/CharacterInfo';

export const  App =() => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Los simpson API en React</h1>
      </header>
      <main className="App-main-content">
        <CharacterInfo/>
        <p>||
          Contenido principal.
        </p>
      </main>
    </div>
  );
}

