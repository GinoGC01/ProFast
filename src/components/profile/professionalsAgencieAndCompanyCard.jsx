import { useState } from 'react'
import { checkAvailability } from '../utils/checkAvailability.js'
import { convertionDay } from '../utils/convertionDay.js'
import { Arrow } from '../../icons/react/arrow.jsx'
import { StarProfile } from '../../icons/react/starProfile.jsx'

export function ProfessionalsAgencieAndCompanyCard({ professional }) {
  const {
    id,
    name,
    profileImg,
    profession,
    specialization,
    proFastProfile,
    experience,
    availability,
  } = professional

  const { daysOn, workingHours } = availability
  const { start, end } = workingHours

  const [open, setOpen] = useState(false)
  const handlerOpen = () => {
    setOpen(!open)
  }

  const VisibleData = () => (
    <>
      <strong style={{ viewTransitionName: `name-${id}` }}>{name} </strong>
      <span
        className={`availability ${
          checkAvailability(availability) == 'disponible'
            ? 'ok-availability'
            : 'no-availability'
        }`}
      ></span>
    </>
  )

  return (
    <li className="visible-data" onClick={handlerOpen}>
      <span
        className={`arrow-visible-data ${open ? 'arrowReverse-visible-data' : ''}`}
      >
        <Arrow />
      </span>
      <span className="availability-text">
        {checkAvailability(availability) == 'disponible'
          ? `Profesional ${checkAvailability(availability)}`
          : `Ausente por ${checkAvailability(availability)}`}
      </span>
      <picture>
        <img
          src={profileImg}
          alt={`Profile image by ${name}`}
          style={{ viewTransitionName: `img-${id}` }}
        />
      </picture>

      <div className="text-container_visible-data">
        <div className="professionAndProfile-container">
          <span
            style={{ viewTransitionName: `profession-${id}` }}
            className="profession"
          >
            {profession}
          </span>
          {proFastProfile.status && (
            <span className="star-profile">
              <StarProfile color="#ffd901" height="18px" width="18px" />
            </span>
          )}
        </div>

        <span className="specialization">{specialization}</span>
        {proFastProfile?.status ? (
          <a href={proFastProfile.url} className="name">
            <VisibleData />
          </a>
        ) : (
          <div className="name">
            <VisibleData />
          </div>
        )}
      </div>

      <div className={`open-data ${open ? 'active_open-data' : ''}`}>
        <span className="title-disponibilidad">Disponibilidad</span>
        <ul className="diasDisponible">
          {daysOn?.map((day) => {
            return (
              <li
                key={day}
              >{`${convertionDay(day)} - ${start} a ${end} hs.`}</li>
            )
          })}
        </ul>
      </div>
    </li>
  )
}
