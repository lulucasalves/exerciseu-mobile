export function formatTime(value, setValue) {
  const intVal = parseInt(value)
  if (isNaN(intVal)) {
    setValue('00')
    return 0
  } else if (value.length > 2) {
    setValue('59')
    return 59
  } else if (intVal < 0) {
    setValue('00')
    return 0
  } else if (intVal > 59) {
    setValue('59')
    return 59
  } else if (intVal < 10) {
    setValue(`0${parseInt(value)}`)
    return parseInt(value)
  } else {
    setValue(String(intVal))
    return intVal
  }
}

export function formatQuantity(value, setValue) {
  if (parseInt(value) > 99) {
    setValue('99')
  }

  if (isNaN(parseInt(value)) || parseInt(value) < 0) {
    setValue('0')
  }
}

export function exerciseTime(time) {
  const timeFloat = parseFloat(time / 60)
  const timeInt = parseInt(time / 60)

  const hours = parseInt(time / 60)
  const minutes = parseInt((timeFloat - timeInt) * 60)

  return `${hours < 10 ? '0' : ''}${hours}:${
    minutes < 10 ? '0' : ''
  }${minutes} h`
}

export function exerciseFinish(time) {
  const d = new Date()
  let hr = d.getHours()
  let min = d.getMinutes()

  const timeFloat = parseFloat(time / 60)
  const timeInt = parseInt(time / 60)
  const hours = parseInt(time / 60)
  const minutes = parseInt((timeFloat - timeInt) * 60)
  let totalHours = hr + hours
  let totalMinutes = min + minutes

  if (totalMinutes > 59) {
    totalHours += 1
    totalMinutes -= 60
  }
  const formatedHours = totalHours > 12 ? totalHours - 12 : totalHours

  return `${formatedHours < 10 ? '0' : ''}${formatedHours}:${
    totalMinutes < 10 ? '0' : ''
  }${totalMinutes}${totalHours > 12 ? 'pm' : 'am'}`
}
