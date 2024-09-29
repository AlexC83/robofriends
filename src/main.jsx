import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hello from './Hello.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Hello greeting={"Hello react"}/>
  </StrictMode>,
)
