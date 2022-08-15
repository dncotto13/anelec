import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1>Contáctenos a través del siguiente formulario</h1>

      <form className='contact' action="mailto:anelecslu@gmail.com">
          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Apellidos' />
          <input type="text" placeholder='Email' />
          <textarea placeholder='Motivo de contacto' />
          <input type="submit" value='Enviar' />
      </form>

    <h1>Contacto</h1>
    <p>Teléfono: 607 11 79 33</p>
    <p>Email: anelecslu@gmail.com</p>
    </div>
  )
}
