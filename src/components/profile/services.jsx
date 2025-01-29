import { isObject } from '../../utils/isObjetct.js'
import { ServicesArrayCard } from './servicesArrayCard.jsx'
import { CardServices } from './cardServices.jsx'
export function Services({ services }) {
  return (
    <ul>
      {Object.entries(services.services).map(([key, value]) => {
        if (Array.isArray(value)) {
          return <ServicesArrayCard clave={key} value={value} key={key} />
        }
        if (isObject(value)) {
          return <CardServices service={value} key={value.id} />
        }
        return null
      })}
    </ul>
  )
}
