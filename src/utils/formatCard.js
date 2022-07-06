export function formatCard(time) {
  const timeFloat = parseFloat(time / 60)
  const timeInt = parseInt(time / 60)

  const hours = parseInt(time / 60)
  const minutes = parseInt((timeFloat - timeInt) * 60)

  const textMinute = `${minutes} minuto${minutes === 1 ? '' : 's'}`
  const textIntermediate = `${hours && minutes ? ' e ' : ''}`
  const textHours = `${hours} hora${hours === 1 ? '' : 's'}`

  return `${hours ? textHours : ''}${textIntermediate}${
    minutes ? textMinute : ''
  }`
}
