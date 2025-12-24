import { utcToZonedTime, format } from 'date-fns-tz'

export const ISO_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/
export const formatDate = str => {
  const date = new Date(str)
  const timeZone = 'America/Halifax'
  const zonedDate = utcToZonedTime(date, timeZone)
  const pattern = 'MMM dd, yyyy h:mm a'
  const output = format(zonedDate, pattern, { timeZone })
  return output
}
export const formatField = str => {
  const isDate = ISO_REGEX.test(str)
  return isDate ? formatDate(str) : str
}
export const formatHeader = str => {
  // Split the input string by underscores
  const words = str.split('_')
  // Capitalize the first letter of each word and join them with spaces
  const convertedString = words.map(word => word.toUpperCase()).join(' ')
  return convertedString
}
export const formatText = str => {
  const containsUnderscore = str.includes('_')
  const splitBy = containsUnderscore ? '_' : ' '
  const words = str.split(splitBy)
  const formattedWords = words.map(
    w => w.toLowerCase().charAt(0).toUpperCase() + w.toLowerCase().slice(1)
  )
  return formattedWords.join(' ')
}
