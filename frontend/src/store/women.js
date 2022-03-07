import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'
//import {fetchAppUserByAppUserId} from './users'

const slice = createSlice({
  //name of spot in the store
  name: "women",
  initialState: [],
  reducers: {
    getAllWomen: (women, action) => {
      return action.payload
    }//,
    // getWomenByAppUserId: (vehicles, action) => {
    //   return action.payload
    // }
  }
})

export const {getAllWomen, getWomenByAppUserId} = slice.actions

export const fetchAllWomen = () => async dispatch => {
  const {data} = await httpConfig(`/apis/woman`);
  dispatch(getAllWomen(data))
}

// export const fetchWomenByAppUserId = (id) => async dispatch => {
//   //backend route
//   const {data} = await httpConfig(`/apis/vehicle/${id}`);
//   dispatch(getWomenByVehicleUserId(data))
// }
//
// export const fetchAllWomenAndAppUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchAllWomen())
//   const userIds = _.uniq(_.map(getState().vehicles, "postAppUserId"));
//   userIds.forEach(id => dispatch(fetchAppUserByAppUserId(id)));
// }

export default slice.reducer
