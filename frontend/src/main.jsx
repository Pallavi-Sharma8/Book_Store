import React from 'react';
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx';
   
createRoot(document.getElementById('root')).render(

<AuthProvider>
    <App />
</AuthProvider>  
)
