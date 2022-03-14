import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../utils/http-config'

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    getAllAppUsers: (users, action) => {
      return action.payload
    },
    getAppUserByAppUserId: (users, action) => {
      users.push(action.payload)
    }
  }
})

export const {getAllAppUsers, getAppUserByAppUserId} = slice.actions

export const fetchAllAppUsers = () => async dispatch => {
  const {data} = await httpConfig(`/apis/appuser/`);
  dispatch(getAllAppUsers(data))
}

export const fetchAppUserByAppUserId = (id) => async dispatch => {
  const {data} = await httpConfig(`/apis/appusers/${id}`);
  dispatch(getAppUserByAppUserId(data))
}

export default slice.reducer