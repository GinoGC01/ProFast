import './galery.css'

export function GaleryCard({ img }) {
  return (
    <div className="gallery-card">
      <picture>
        <img src={img.image} alt={img.description} />
      </picture>
      <div className="content-hover">
        <div className="data-type">
          <span className="type">{img.type}</span>
          <span className="date">{img.date}</span>
        </div>
        <p className="description">{img.description}</p>
      </div>
    </div>
  )
}
