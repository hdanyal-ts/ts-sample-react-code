import { createSlice } from '@reduxjs/toolkit'
import { GET_TIMESHEET } from '@public/data/sample'

export const timesheetReducer = createSlice({
  name: 'timesheet',
  initialState: {
    data: null,
    loading: false,
    error: undefined
  },
  reducers: {
    start: (state) => {
      state.loading = true
      state.error = undefined
    },
    success: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = undefined
    },
    failure: (state) => {
      state.loading = false
      state.error = 'Unable to fetch timesheet'
    },
    reset: (state) => {
      state.data = null
      state.loading = false
      state.error = undefined
    }
  }
})

export default timesheetReducer.reducer

export const fetchTimesheetThunk = employeeId => async dispatch => {
  try {
    dispatch(timesheetReducer.actions.start())
    const res = await new Promise(resolve => {
      setTimeout(() => resolve(GET_TIMESHEET.timesheet), 500)
    })
    return dispatch(timesheetReducer.actions.success(res))
  } catch (err) {
    return dispatch(timesheetReducer.actions.failure())
  }
}
