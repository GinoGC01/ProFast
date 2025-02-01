export const convertionDay = (dia) => {
  const Dias = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ]
  const Days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  const index = Days.findIndex((day) => day === dia)

  return index !== -1 ? Dias[index] : undefined
}
