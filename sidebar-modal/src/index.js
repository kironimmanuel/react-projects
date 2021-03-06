import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/global.css'
import { AppProvider } from './context/context'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
