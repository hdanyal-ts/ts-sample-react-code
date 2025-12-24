import { createSlice } from '@reduxjs/toolkit'

const defaultPlant = {
  plantId: null,
  ingestionId: null,
  plantName: null,
  plantNumber: [],
  plantAbrevation: null,
  location: null,
  country: null,
  region: null,
  language: null,
  securityGroups: []
}
const defaultUser = {
  id: null,
  name: null,
  email: null,
  groups: [],
  accountType: null
}
const INITIAL_ACCOUNT_STATE = {
  plant: defaultPlant,
  user: defaultUser
}

export const accountSlice = createSlice({
  name: 'account',
  initialState: INITIAL_ACCOUNT_STATE,
  reducers: {
    resetAccountState: state => {
      state.plant = defaultPlant
      state.user = defaultUser
    },
    setPlantInformation: (state, action) => {
      const plant = action.payload.plant
      if (!plant.plantId) return
      state.plant = plant
    },
    setUserInformation: (state, action) => {
      const user = action.payload.user
      if (!user.id) return
      state.user = user
    }
  }
})

export const { resetAccountState, setPlantInformation, setUserInformation } =
  accountSlice.actions

export default accountSlice.reducer
