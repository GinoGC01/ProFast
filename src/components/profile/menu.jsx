import { useEffect, useState } from "react";
import "./menu.css";
import { Plans } from "./plans.jsx";
import { About } from "./about.jsx";
import { Galery } from "./galery.jsx";
import { ButtonMenu } from "./buttonMenu.jsx";

export function Menu({ plans, about, galery }) {
  const [activeTab, setActiveTab] = useState("plans");

  const buttons = [
    { section: "plans", name: "Planes", status: plans.status },
    { section: "about", name: "Sobre mi", status: about.status },
    { section: "galery", name: "Imágenes", status: galery.status },
  ];

  const handleOpen = (tab) => {
    setActiveTab(tab);
  };

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
          );
        })}
      </div>
      <div className="menu-content-container">
        {activeTab === "plans" && plans.status && (
          <div id="plans-container" className="plans-container">
            <Plans plans={plans} />
          </div>
        )}
        {activeTab === "about" && about.status && (
          <div id="about-container" className="about-container">
            <About about={about} />
          </div>
        )}
        {activeTab === "galery" && galery.status && (
          <div id="galery-container" className="galery-container">
            <Galery galery={galery} />
          </div>
        )}
      </div>
    </div>
  );
}
