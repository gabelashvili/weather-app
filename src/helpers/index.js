export const getDate = (date) => {
  const newDate = new Date(date * 1000)
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday']
  const day = days[newDate.getDay()]
  const hours = newDate.getHours()
  const minutes = newDate.getMinutes()
  return {
    day,
    hours: hours < 10 ? `0${hours}` : hours,
    minutes: minutes < 10 ? `0${minutes}` : minutes,
  }
}
