import './servicesCard.css'
import { CardServices } from './cardServices'
export function ServicesArrayCard({ clave, value }) {
  return (
    <li className="servicesArrayCard">
      <strong>{clave}:</strong>
      <ul className="services">
        {value.map((serv) => (
          <CardServices key={serv.id} service={serv} />
        ))}
      </ul>
    </li>
  )
}
