import { Education } from "../../icons/react/education.jsx";
import { Logros } from "../../icons/react/logros.jsx";

import "./about.css";

export function About({ about }) {
  const {
    carrera,
    perfil,
    habilidades,
    idiomas,
    educacion,
    experienciaLaboral,
    intereses,
    logros,
    disponibilidad,
  } = about;
  return (
    <section id="about">
      <h2>{carrera}</h2>
      <p>{perfil}</p>
      <section className="disponibilidad">
        <h3>Disponibilidad</h3>
        <div className="modalidad">
          <h4>Modalidad:</h4>
          <ul>
            {disponibilidad.modalidad.map((modalidad) => {
              return <li key={modalidad}>{modalidad} /</li>;
            })}
          </ul>
        </div>
        <div className="jornada">
          <h4>Jornada:</h4>
          <ul>
            {disponibilidad.jornada.map((jornada) => {
              return <li key={jornada}>{jornada} /</li>;
            })}
          </ul>
        </div>
      </section>

      <section className="habilidades">
        <h3>Habilidades</h3>
        <ul>
          {habilidades?.map((habilidad) => {
            return <li key={habilidad}>{habilidad}</li>;
          })}
        </ul>
      </section>
      <section className="idiomas">
        <h3>Idiomas</h3>
        <ul>
          {idiomas.español != "none" && (
            <li>
              Español: <span>{idiomas.español}</span>
            </li>
          )}
          {idiomas.inglés != "none" && (
            <li>
              Inglés: <span>{idiomas.inglés}</span>
            </li>
          )}
          {idiomas.italiano != "none" && (
            <li>
              Italiano: <span>{idiomas.italiano}</span>
            </li>
          )}
        </ul>
      </section>
      <section className="educacion">
        <h3>Educación</h3>
        <ul>
          {educacion?.map(({ institucion, titulo, anioGraduacion }) => {
            return (
              <li key={titulo}>
                <span className="education-icon">
                  <Education />
                </span>
                <div className="education-content">
                  <strong>{titulo}</strong>
                  <span>{institucion}</span>
                  <span> - {anioGraduacion}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="experienciaLaboral">
        <h3>Experiencia Laboral</h3>
        <ul>
          {experienciaLaboral?.map(
            ({ empresa, cargo, periodo, responsabilidades }) => {
              return (
                <li className="exp-card" key={`${empresa}-${cargo}`}>
                  <strong className="empresa">{empresa}</strong>
                  <span className="cargo">{cargo}</span>
                  <span className="periodo">{periodo}</span>
                  <h4>Responsabilidades:</h4>
                  <ul className="responsabilidades">
                    {responsabilidades?.map((responsabilidad) => {
                      return <li> - {responsabilidad}</li>;
                    })}
                  </ul>
                </li>
              );
            }
          )}
        </ul>
      </section>

      <section className="logros">
        <h3>Logros</h3>
        <ul>
          {logros?.map((logro) => {
            return (
              <li key={logro}>
                <span>
                  <Logros />
                </span>
                {logro}
              </li>
            );
          })}
        </ul>
      </section>
      <section className="intereses">
        <h3>Intereses</h3>
        <ul>
          {intereses?.map((interes) => {
            return <li key={interes}>{interes}</li>;
          })}
        </ul>
      </section>
    </section>
  );
}
