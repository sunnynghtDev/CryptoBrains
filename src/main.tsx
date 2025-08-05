import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './assets/styles/fonts.css'
import './assets/styles/global.css'
import './assets/styles/reset.css'
import './assets/styles/colors.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
