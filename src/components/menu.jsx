import { useState } from "react";
import "./menu.css";
import { Plans } from "./plans.jsx";
import { About } from "./about.jsx";

export function Menu({ plans, about }) {
  const [activeTab, setActiveTab] = useState("plans");

  const handleOpen = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="menu">
      <div className="menu-buttons">
        <button
          id="plans-btn"
          onClick={() => handleOpen("plans")}
          className={activeTab === "plans" ? "plans-btn active" : "plans-btn "}
        >
          Planes
        </button>
        <button
          id="about-btn"
          onClick={() => handleOpen("about")}
          className={activeTab === "about" ? "about-btn active" : "about-btn"}
        >
          Sobre mí
        </button>
      </div>
      <div className="menu-content-container">
        {activeTab === "plans" && (
          <div id="plans-container" className="plans-container">
            <Plans plans={plans} />
          </div>
        )}
        {activeTab === "about" && (
          <div id="about-container" className="about-container">
            <About about={about} />
          </div>
        )}
      </div>
    </div>
  );
}
