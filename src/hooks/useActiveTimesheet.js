import { useSelector } from 'react-redux'

export default function useActiveTimesheet () {
  const account = useSelector(state => state.account)
  const timesheet = useSelector(state => state.timesheet)
  const positionNames = timesheet?.data?.positions?.map(item => item.name) ?? []

  const currentShift = { crew: 'N/A', shift: 'N/A', supervisor: 'N/A' }

  return {
    currentShift,
    positionNames,
    timesheet: timesheet.data,
    user: account.user
  }
}
