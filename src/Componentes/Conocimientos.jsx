
import React from 'react'
import '../ComponentesCss/Conocimientos.css'

export const Conocimientos = () => {
    return (
        <section className='conocimientos' id='conocimientos'>
            <div className='conocimientos-container'>
                
                {/* Título principal */}
                <div className='conocimientos-header'>
                    <h2>Conocimientos Técnicos</h2>
                    <p className='subtitulo'>Tecnologías que domino</p>
                </div>

                {/* Grid de tecnologías */}
                <div className='tecnologias-grid'>
                    
                    <div className='categoria-tech'>
                        <h3>Frontend</h3>
                        <div className='tech-tags'>
                            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className='tech-tag'>React</a>
                            <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className='tech-tag'>JavaScript</a>
                            <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className='tech-tag'>HTML</a>
                            <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className='tech-tag'>CSS</a>
                        </div>
                    </div>

                    <div className='categoria-tech'>
                        <h3>Backend</h3>
                        <div className='tech-tags'>
                            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className='tech-tag'>Node.js</a>
                            <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className='tech-tag'>Express</a>
                            <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer" className='tech-tag'>Java</a>
                            <a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer" className='tech-tag'>APIs REST</a>
                        </div>
                    </div>

                    <div className='categoria-tech'>
                        <h3>Base de Datos</h3>
                        <div className='tech-tags'>
                            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" className='tech-tag'>MySQL</a>
                        </div>
                    </div>

                    <div className='categoria-tech'>
                        <h3>Herramientas</h3>
                        <div className='tech-tags'>
                            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className='tech-tag'>Git</a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='tech-tag'>GitHub</a>
                            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className='tech-tag'>VS Code</a>
                            <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className='tech-tag'>Postman</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
} 

export default Conocimientos