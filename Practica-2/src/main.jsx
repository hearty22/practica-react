import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App } from './pages/App'
import './index.css'; // Añade esta línea para importar los estilos

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
