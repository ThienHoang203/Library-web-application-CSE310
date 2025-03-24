import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Route from './Route'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Route />
  </StrictMode>,
)
