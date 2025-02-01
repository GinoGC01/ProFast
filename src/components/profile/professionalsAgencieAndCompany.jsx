import { ProfessionalsAgencieAndCompanyCard } from './professionalsAgencieAndCompanyCard.jsx'

import './professionalCard.css'

export function ProfessionalsAgencieAndCompany({ professionals }) {
  return (
    <section>
      <header className="header-professionals">
        <h3>Profesionales</h3>
      </header>
      <ul>
        {professionals.professionals?.map((professional) => {
          return (
            <ProfessionalsAgencieAndCompanyCard
              key={professional.id}
              professional={professional}
            />
          )
        })}
      </ul>
    </section>
  )
}
