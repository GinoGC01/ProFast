export const checkAvailability = (availability) => {
  const { dateOfVacations, emergencyLeave, workingHours, daysOff } =
    availability
  const { status, start, end } = dateOfVacations

  // Función para convertir fechas en formato DD/MM/YYYY a objeto Date
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/')
    return new Date(`${year}-${month}-${day}`)
  }

  const now = new Date() // Fecha y hora actual
  const startVacations = parseDate(start) // Fecha de inicio de vacaciones (ya es un objeto Date)
  const endVacations = parseDate(end) // Fecha de fin de vacaciones (ya es un objeto Date)

  // Verificar si la fecha actual está dentro del rango de vacaciones
  const dateInRange = now >= startVacations && now <= endVacations

  // Verificar si es un día libre
  const dayOfWeek = now.toLocaleDateString('es-AR', {
    weekday: 'long',
    timeZone: 'America/Argentina/Buenos_Aires',
  })
  const isDayOff = daysOff.includes(dayOfWeek)

  // Verificar si está fuera del horario laboral
  const currentTime = now.toLocaleTimeString('es-AR', {
    hour12: false,
    timeZone: 'America/Argentina/Buenos_Aires',
  })

  // Lógica de disponibilidad
  if (emergencyLeave) {
    return 'emergencia'
  } else if (dateInRange && status) {
    return 'vacaciones'
  } else if (isDayOff) {
    return 'dia no laboral'
  } else if (currentTime) {
    return 'fuera horario laboral'
  } else {
    return 'disponible'
  }
}
