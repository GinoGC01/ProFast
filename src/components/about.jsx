import { Education } from "../icons/react/education.jsx";
import { Logros } from "../icons/react/logros.jsx";
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
      <section classname="disponibilidad">
        <h3>Disponibilidad</h3>
        <div classname="modalidad">
          <h4>Modalidad:</h4>
          <ul>
            {disponibilidad.modalidad.map((modalidad) => {
              return <li>{modalidad} /</li>;
            })}
          </ul>
        </div>
        <div classname="jornada">
          <h4>Jornada:</h4>
          <ul>
            {disponibilidad.jornada.map((jornada) => {
              return <li>{jornada} /</li>;
            })}
          </ul>
        </div>
      </section>

      <section classname="habilidades">
        <h3>Habilidades</h3>
        <ul>
          {habilidades?.map((habilidad) => {
            return <li>{habilidad}</li>;
          })}
        </ul>
      </section>
      <section classname="idiomas">
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
      <section classname="educacion">
        <h3>Educación</h3>
        <ul>
          {educacion?.map(({ institucion, titulo, anioGraduacion }) => {
            return (
              <li>
                <span classname="education-icon">
                  <Education />
                </span>
                <div classname="education-content">
                  <strong>{titulo}</strong>
                  <span>{institucion}</span>
                  <span> - {anioGraduacion}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section classname="experienciaLaboral">
        <h3>Experiencia Laboral</h3>
        <ul>
          {experienciaLaboral?.map(
            ({ empresa, cargo, periodo, responsabilidades }) => {
              return (
                <li classname="exp-card">
                  <strong classname="empresa">{empresa}</strong>
                  <span classname="cargo">{cargo}</span>
                  <span classname="periodo">{periodo}</span>
                  <h4>Responsabilidades:</h4>
                  <ul classname="responsabilidades">
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

      <section classname="logros">
        <h3>Logros</h3>
        <ul>
          {logros?.map((logro) => {
            return (
              <li>
                <span>
                  <Logros />
                </span>
                {logro}
              </li>
            );
          })}
        </ul>
      </section>
      <section classname="intereses">
        <h3>Intereses</h3>
        <ul>
          {intereses?.map((interes) => {
            return <li>{interes}</li>;
          })}
        </ul>
      </section>
    </section>
  );
}
