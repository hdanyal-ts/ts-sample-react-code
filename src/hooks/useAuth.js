import { useSelector } from 'react-redux'

export default function useAuth () {
  const timesheet = useSelector(state => state.timesheet)
  const hasTimesheet = timesheet.data !== null
  const isAuthenticated = true && hasTimesheet
  const isLoading = timesheet.loading

  return { hasTimesheet, isAuthenticated, isLoading }
}
