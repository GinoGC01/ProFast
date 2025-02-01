import { useState } from 'react'
import { checkAvailability } from '../utils/checkAvailability.js'
import { convertionDay } from '../utils/convertionDay.js'

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
      <span className={`availability`}>{checkAvailability(availability)}</span>
    </>
  )

  return (
    <li className="visible-data" onClick={handlerOpen}>
      <picture>
        <img
          src={profileImg}
          alt={`Profile image by ${name}`}
          style={{ viewTransitionName: `img-${id}` }}
        />
      </picture>

      <div className="text-container_visible-data">
        <span
          style={{ viewTransitionName: `profession-${id}` }}
          className="profession"
        >
          {profession}
        </span>
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
        <span className="experience">Experiencia: {experience}</span>
        <ul className="diasDisponible">
          {daysOn?.map((day) => {
            return (
              <li key={day}>{`${convertionDay(day)} de: ${start} a ${end}`}</li>
            )
          })}
        </ul>
      </div>
    </li>
  )
}
