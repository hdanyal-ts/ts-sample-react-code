import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { fetchTimesheetThunk } from '@redux/slices/timesheetSlice'
import {
  setPlantInformation,
  setUserInformation
} from '../redux/slices/accountSlice'

export default function useTimesheetLogin (props) {
  const { employee, plantInformation, positions } = props
  const router = useRouter()
  const dispatch = useDispatch()
  const [dropdownOptions, setDropdownOptions] = useState([])
  const [selectedPositions, setSelectedPositions] = useState([])
  const account = useSelector(state => state.account)
  const timesheet = useSelector(state => state.timesheet)

  const { user, plant } = account
  const containsPositions = dropdownOptions.length > 0
  const activeUser = user.id !== null
  const activePlant = plant.plantId !== null
  const requiredInformation = containsPositions && activeUser && activePlant
  const isLoading = timesheet.loading

  const onCreateTimesheet = () => {
    const getTimesheet = fetchTimesheetThunk(user.id)
    getTimesheet(dispatch)
  }

  useEffect(() => {
    const validTimesheet = !timesheet.error && timesheet.data !== null
    if (validTimesheet) {
      router.push('/ddds/handoff/previous')
    }
  }, [router, timesheet])

  useEffect(() => {
    if (plantInformation && !activePlant) {
      dispatch(setPlantInformation({ plant: plantInformation }))
    }
    if (employee && !activeUser) {
      dispatch(setUserInformation({ user: employee }))
    }
    if (positions && !containsPositions) {
      const formatPositions = item => ({
        value: item.id,
        label: item.name
      })
      const formatted = positions.map(formatPositions)
      setDropdownOptions(formatted)
    }
  }, [
    activePlant,
    activeUser,
    containsPositions,
    dispatch,
    plantInformation,
    positions,
    employee
  ])

  const hideLogin = !requiredInformation || timesheet.data !== null

  return {
    dropdownOptions,
    hideLogin,
    isLoading,
    onCreateTimesheet,
    plant,
    selectedPositions,
    setSelectedPositions,
    user
  }
}
