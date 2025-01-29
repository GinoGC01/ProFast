import { useState } from 'react'
import { useGetDollarPrice } from '../../hooks/useConvertion.jsx'
import { Arrow } from '../../icons/react/arrow.jsx'

export function CardServices({ service }) {
  const { price } = useGetDollarPrice()
  const [expandedSection, setExpandedSection] = useState(false)

  const handlerExpandedSection = () => {
    setExpandedSection(!expandedSection)
  }

  return (
    <li className="CardServiceArrayCard" onClick={handlerExpandedSection}>
      <span
        className={`arrow-CardServiceArrayCard ${expandedSection ? 'arrowReverse-CardServiceArrayCard' : ''}`}
      >
        <Arrow />
      </span>
      <div className="title_serviceCard">{service.title}</div>
      <div className="price">
        <span>{service.price}</span>
        <span>{service.divisa}</span>
        <div className="convertion-price">
          <span className="price-ars">≈ {service.price * price} ARS</span>
          <span>
            precio aproximado en pesos argentinos (1 USD = {price} ARS)
          </span>
        </div>
      </div>
      <div
        className={`data-CardServiceArrayCard ${expandedSection ? 'data-expanded' : ''}`}
      >
        <p>{service.description}</p>
        {service.duracionResultados && (
          <span>Resultados en: {service.duracionResultados}</span>
        )}
        {service.duration && <span>Duración: {service.duration}</span>}
        <a
          href={service.contacto}
          title={`Contacto directo para agentar turno en ${service.title}`}
        >
          Agendar turno
        </a>
      </div>
    </li>
  )
}
