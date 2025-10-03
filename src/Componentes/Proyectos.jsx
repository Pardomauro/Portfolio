import React from 'react'
import '../ComponentesCss/Proyectos.css'

export const Proyectos = () => {
    return (
        <section className='proyectos' id='proyectos'>
            <div className='proyectos-container'>
                
                {/* Título principal */}
                <div className='proyectos-header'>
                    <h2>Mis Proyectos</h2>
                    <p className='subtitulo'>Trabajos que he construido</p>
                </div>

                {/* Grid de proyectos */}
                <div className='proyectos-grid'>
                    
                    <div className='proyecto-card'>
                        <div className='proyecto-contenido'>
                            <h3>Aplicación de Blogs - Full Stack</h3>
                            <p>Desarrollé una aplicación de blogs utilizando React para el frontend y Node.js para el backend.
                               Permite a los usuarios escribir y publicar artículos, incluyendo la capacidad de agregar 
                               imágenes a sus publicaciones.</p>
                            
                            <div className='tecnologias-usadas'>
                                <span className='tech-tag'>React</span>
                                <span className='tech-tag'>Node.js</span>
                                <span className='tech-tag'>Express</span>
                                <span className='tech-tag'>MySQL</span>
                            </div>
                            
                            <div className='proyecto-enlaces'>
                                <a href="https://youtu.be/bSLcvK4lHJs" target="_blank" rel="noopener noreferrer" className='btn-proyecto btn-demo'>Ver Proyecto</a>
                                <a href="https://github.com/Pardomauro/ProyectoMiBlog-FullStack.git" target="_blank" rel="noopener noreferrer" className='btn-proyecto btn-github'>GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className='proyecto-card'>
                        <div className='proyecto-contenido'>
                            <h3>Sistema de Gestión de Reclamos Ciudadanos</h3>
                            <p>Implementé una API REST completa en Node.js con Express para permitir a los ciudadanos realizar
                               reclamos o informes relacionados con servicios públicos. Implementación de CRUD, validaciones, 
                               manejo de errores y conexión a base de datos.</p>
                            
                            <div className='tecnologias-usadas'>
                                <span className='tech-tag'>Node.js</span>
                                <span className='tech-tag'>Express</span>
                                <span className='tech-tag'>MySQL</span>
                                <span className='tech-tag'>API REST</span>
                            </div>
                            
                            <div className='proyecto-enlaces'>
                                <a href="https://youtu.be/pgliqO2S4GE" target="_blank" rel="noopener noreferrer" className='btn-proyecto btn-demo'>Ver Proyecto</a>
                                <a href="https://github.com/Pardomauro/Reclamos-Ciudadanos.git" target="_blank" rel="noopener noreferrer" className='btn-proyecto btn-github'>GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className='proyecto-card'>
                        <div className='proyecto-contenido'>
                            <h3>Sistema de Gestión de Turnos Médicos</h3>
                            <p>Desarrollé una API REST completa en Node.js con Express para un centro médico, gestionando 
                               pacientes, profesionales de salud y turnos asignados con carga y manejo de imágenes. 
                               Operaciones CRUD y estructura modular siguiendo buenas prácticas.</p>
                            
                            <div className='tecnologias-usadas'>
                                <span className='tech-tag'>Node.js</span>
                                <span className='tech-tag'>Express</span>
                                <span className='tech-tag'>MySQL</span>
                                <span className='tech-tag'>Multer</span>
                            </div>
                            
                            <div className='proyecto-enlaces'>
                                <a href="https://youtu.be/brHi3imZT10" target="_blank" rel="noopener noreferrer" className='btn-proyecto btn-demo'>Ver Proyecto</a>
                                <a href="https://github.com/Pardomauro/Sistema-de-Gestion-de-Turnos-Medicos.git" target="_blank" rel="noopener noreferrer" className='btn-proyecto btn-github'>GitHub</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Proyectos