import { utcToZonedTime } from 'date-fns-tz'

function composeHiddenTimes (tzTimestamp) {
  const morningStart = new Date(tzTimestamp)
  morningStart.setHours(4, 30, 0, 0)
  const morningEnd = new Date(tzTimestamp)
  morningEnd.setHours(5, 29, 59, 59)
  const nightStart = new Date(tzTimestamp)
  nightStart.setHours(16, 30, 0, 0)
  const nightEnd = new Date(tzTimestamp)
  nightEnd.setHours(17, 29, 59, 59)
  return { morningStart, morningEnd, nightStart, nightEnd }
}
function getDataRefreshTimestamps (tzTimestamp) {
  const morningStart = new Date(tzTimestamp)
  morningStart.setHours(5, 30, 0, 0)
  const morningEnd = new Date(tzTimestamp)
  morningEnd.setHours(5, 49, 59, 59)
  const nightStart = new Date(tzTimestamp)
  nightStart.setHours(17, 30, 0, 0)
  const nightEnd = new Date(tzTimestamp)
  nightEnd.setHours(17, 49, 59, 59)
  return { morningStart, morningEnd, nightStart, nightEnd }
}
function compareTime (now) {
  return ({ start, end }) => {
    return now >= start && now <= end
  }
}
export function verifyDataVisible (now = new Date()) {
  const timezone = 'America/Halifax'
  const tzTimestamp = utcToZonedTime(now, timezone)
  // Create Date objects for 4:30 AM/PM and 5:30 AM/PM in timezone time
  const { morningStart, morningEnd, nightStart, nightEnd } =
    composeHiddenTimes(tzTimestamp)
  const getVisibility = compareTime(tzTimestamp)
  const isHiddenMorningTime = getVisibility({
    start: morningStart,
    end: morningEnd
  })
  const isHiddenNightTime = getVisibility({ start: nightStart, end: nightEnd })
  return !isHiddenMorningTime && !isHiddenNightTime
}

export function verifyDataPullTime (now = new Date()) {
  const timezone = 'America/Halifax'
  const tzTimestamp = utcToZonedTime(now, timezone)
  const { morningStart, morningEnd, nightStart, nightEnd } =
    getDataRefreshTimestamps(tzTimestamp)
  const isTimeToPullData = compareTime(tzTimestamp)
  const shouldPullInMorning = isTimeToPullData({
    start: morningStart,
    end: morningEnd
  })
  const shouldPullAtNight = isTimeToPullData({
    start: nightStart,
    end: nightEnd
  })
  return shouldPullInMorning || shouldPullAtNight
}
