export function ButtonMenu({ section, name, handleOpen, activeTab }) {
  return (
    <button
      id={`${section}-btn`}
      onClick={() => handleOpen(section)}
      className={activeTab === section ? 'plans-btn active' : 'plans-btn '}
    >
      {name}
    </button>
  )
}
