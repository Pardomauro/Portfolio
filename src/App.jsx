import React, { useState, useEffect } from 'react'
import './App.css'
import Inicio from './Componentes/Inicio'
import SobreMi from './Componentes/SobreMi'
import Conocimientos from './Componentes/Conocimientos'
import Proyectos from './Componentes/Proyectos'
import Contacto from './Componentes/Contacto'

function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    // Efecto de carga de toda la aplicación después de 2 segundos
    const timer = setTimeout(() => {
      setIsAppLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen Global */}
      {!isAppLoaded && (
        <div className='app-loading-screen'>
          <div className='app-loading-content'>
            <div className='app-spinner'></div>
            <h2>Mauro Pardo</h2>
            <p>Cargando Portfolio...</p>
          </div>
        </div>
      )}

      {/* Contenido de la aplicación */}
      <div className={`app-content ${isAppLoaded ? 'app-fade-in' : 'app-hidden'}`}>
        <Inicio />
        <SobreMi />
        <Conocimientos />
        <Proyectos />
        <Contacto />
      </div>
    </>
  )
}
  

export default App
