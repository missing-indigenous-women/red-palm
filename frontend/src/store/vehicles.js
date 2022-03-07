import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'
//import {fetchAppUserByAppUserId} from './users'

const slice = createSlice({
  //name of spot in the store
  name: "vehicles",
  initialState: [],
  reducers: {
    getAllVehicles: (vehicles, action) => {
      return action.payload
    }//,
    // getVehiclesByAppUserId: (vehicles, action) => {
    //   return action.payload
    // }
  }
})

export const {getAllVehicles, getVehiclesByAppUserId} = slice.actions

export const fetchAllVehicles = () => async dispatch => {
  const {data} = await httpConfig(`/apis/vehicles`);
  dispatch(getAllVehicles(data))
}

// export const fetchVehiclesByAppUserId = (id) => async dispatch => {
//   //backend route
//   const {data} = await httpConfig(`/apis/vehicle/${id}`);
//   dispatch(getVehiclesByVehicleUserId(data))
// }
//
// export const fetchAllVehiclesAndAppUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchAllVehicles())
//   const userIds = _.uniq(_.map(getState().vehicles, "postAppUserId"));
//   userIds.forEach(id => dispatch(fetchAppUserByAppUserId(id)));
// }

export default slice.reducer
