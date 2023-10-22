import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyRoute from './Router/MyRoute'
import AuthProvider, {  } from './AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={MyRoute}></RouterProvider>
    </React.StrictMode>
  </AuthProvider>
)
