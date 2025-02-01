import { useState } from 'react'
import { Galery } from './galery.jsx'
import { ButtonMenu } from './buttonMenu.jsx'
import { Services } from './services.jsx'
import { ProfessionalsAgencieAndCompany } from './professionalsAgencieAndCompany.jsx'

export function MenuagencieAndCompany({
  about,
  portfolio,
  buttons,
  services,
  professionals,
}) {
  const [activeTab, setActiveTab] = useState('services')

  const handleOpen = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="menu">
      <div className="menu-buttons">
        {buttons.map(({ section, name, status }) => {
          return (
            status && (
              <ButtonMenu
                name={name}
                section={section}
                key={name}
                handleOpen={handleOpen}
                activeTab={activeTab}
              />
            )
          )
        })}
      </div>
      <div className="menu-content-container">
        {activeTab === 'services' && services.status && (
          <div id="services-container" className="services-container">
            <Services services={services} />
          </div>
        )}
        {activeTab === 'professionals' && professionals.status && (
          <div id="professionals-container" className="professionals-container">
            <ProfessionalsAgencieAndCompany professionals={professionals} />
          </div>
        )}
        {activeTab === 'about' && about.status && (
          <div
            id="about-agencieAndCompany-container"
            className="about-agencieAndCompany-container"
          >
            about
          </div>
        )}
        {activeTab === 'galery' && portfolio.status && (
          <div id="galery-container" className="galery-container">
            <Galery galery={portfolio} />
          </div>
        )}
      </div>
    </div>
  )
}
