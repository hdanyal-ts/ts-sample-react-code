import moment from 'moment'

export { formatDate }

export const compareBeforeThirtyDays = compareDateDaysAgo(30)
export const compareBeforeSixtyDays = compareDateDaysAgo(60)
function compareDateDaysAgo (days) {
  return date => {
    const incomingDate = new Date(date)
    // get the current date
    const currentDate = moment()
    // Subtract the date by provided days days ago
    const daysAgo = moment(currentDate).subtract(days, 'days')
    return moment(incomingDate).isBefore(daysAgo)
  }
}
function formatDate (dateStr) {
  const parsedDate = moment(dateStr)
  if (!parsedDate.isValid()) return 'N/A'
  const date = parsedDate.format('MM/DD/YYYY h:mm A')
  return date
}
