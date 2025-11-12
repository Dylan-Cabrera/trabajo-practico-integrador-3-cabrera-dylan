import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AppRouter } from './routes/AppRouter'
import { AuthProvider } from './context/authContext'


function App() {


  return (
    <>
      <AuthProvider> {/* todas las rutas quedan envueltas por el contexto */}
        <AppRouter/> 
      </AuthProvider>
    </>
  )
}

export default App
