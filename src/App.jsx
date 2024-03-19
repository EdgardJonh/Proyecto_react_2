import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Productos from './components/Producto'
function App() {
  

  return (
    <>
     <Productos titulos='Este es una prueba agregando expreciones desde props' price='200'/>
     <Productos titulos='Este es ' price='300'/>
     <Productos titulos='Este es una'/>
     <Productos titulos='Este es una prueba agregando'/>
    </>
  )
}

export default App
