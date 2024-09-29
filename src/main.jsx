import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardList from './CardList.jsx'
import './index.css'
import {robots} from './robots.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList robots={robots}/>
  </StrictMode>,
)
