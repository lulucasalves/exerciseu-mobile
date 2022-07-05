export function formatTime(value, setValue) {
  if (isNaN(parseInt(value))) {
    setValue('00')
  } else if (value.length > 2) {
    setValue('59')
  } else if (parseInt(value) < 0) {
    setValue('00')
  } else if (parseInt(value) > 59) {
    setValue('59')
  } else if (parseInt(value) < 10) {
    setValue(`0${parseInt(value)}`)
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
