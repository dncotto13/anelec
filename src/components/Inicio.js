import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
      <h1>Instalaciones y montajes</h1>
      <p>
      Realizamos instalaciones eléctricas, aportando resultados a medida de cada cliente, elaborando proyectos de negocios, naves industriales, edificios y centros de transformación.
      </p>

      <p>Nos preocupamos por la calidad de nuestros productos y servicios, aportando más de 15 años en el sector. <Link to="/contacto">Contacte con nosotros</Link> </p>
    </div>
  )
}
