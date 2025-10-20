
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../ComponentesCss/Contacto.css'


export const Contacto = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        emailjs.sendForm('service_c8oh6j8', 'template_0xn3zex', form.current, 'AoVkKT-weqSDN7RNP')
            .then((result) => {
                console.log(result.text);
                setSubmitStatus('success');
                setIsSubmitting(false);
                // Limpiar el formulario
                form.current.reset();
                // Ocultar el mensaje después de 5 segundos
                setTimeout(() => {
                    setSubmitStatus('');
                }, 5000);
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error');
                setIsSubmitting(false);
                // Ocultar el mensaje después de 5 segundos
                setTimeout(() => {
                    setSubmitStatus('');
                }, 5000);
            });
    };

    return (
        <section className='contacto' id='contacto'>
            <div className='contacto-container'>
                
                {/* Header de contacto */}
                <div className='contacto-header'>
                    <h2>Contáctame</h2>
                    <p className='subtitulo'>Hablemos sobre tu próximo proyecto</p>
                </div>

                <div className='contacto-content'>
                    
                    {/* Formulario de contacto */}
                    <div className='formulario-container'>
                        <form className='contacto-form' ref={form} onSubmit={sendEmail}>
                            <div className='form-group'>
                                <label htmlFor="name">Nombre</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder='Tu nombre completo' 
                                    required 
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder='Tu correo electrónico' 
                                    required 
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="subject">Asunto</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    placeholder='Asunto del mensaje' 
                                    required 
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="message">Mensaje</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    placeholder='Escribe tu mensaje aquí' 
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className='btn-enviar' disabled={isSubmitting}>
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                            </button>

                            {/* Mensaje de confirmación */}
                            {submitStatus === 'success' && (
                                <div className='mensaje-confirmacion exito'>
                                    <span className='icono-exito'>✅</span>
                                    ¡Enviado con Éxito! Te responderé pronto.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className='mensaje-confirmacion error'>
                                    <span className='icono-error'>❌</span>
                                    Error al enviar. Inténtalo de nuevo.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Información de contacto */}
                    <div className='info-contacto'>
                        <div className='contacto-directo'>
                            <h3>Contacto Directo</h3>
                            <div className='contacto-item'>
                                <span className='contacto-label'>Email:</span>
                                <a href="mailto:maupardo03@gmail.com" className='contacto-link'>
                                    maupardo03@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className='disponibilidad'>
                            <h3>Disponibilidad</h3>
                            <p>Estoy disponible para proyectos freelance y oportunidades laborales full-time.</p>
                            
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className='footer'>
                    <div className='footer-content'>
                        <p>© 2025 Mauro Pardo - Desarrollador Full Stack</p>
                        <p>Hecho con React ⚛️</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contacto