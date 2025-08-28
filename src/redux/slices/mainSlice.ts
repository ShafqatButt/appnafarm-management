import { AddMyFarmAction, MainSliceState, SetPreferredLanguageAction, SetUserAction } from '@/src/types/mainSlice';
import {createSlice} from '@reduxjs/toolkit';

const initialState: MainSliceState = {
  user: null,
  authInitialRoute: "/languageSelection",
  isLoggedIn: false,
  preferredLanguage: {label: 'English', code: 'en'},
  myFarms: [
    {
      id: 11,
      title: 'Farm One',
      address: 'Location One',
      latitude: '28.962682',
      longitude: '70.729352',
      // addressCoords: {
      //   latitude: 28.962682,
      //   longitude: 70.729352,
      // },
      size: '190',
      cropType: 'sugarcane',
      status: 'pending',
      farmArea: [
        {latitude: 28.967444, longitude: 70.74605, id: '1'},
        {latitude: 28.966947, longitude: 70.746037, id: '2'},
        {latitude: 28.966956, longitude: 70.746682, id: '3'},
        {latitude: 28.967442, longitude: 70.746704, id: '4'},
      ],
    },
    {
      id: 12,
      title: 'Farm Two',
      address: 'Location 2',
      size: '160',
      cropType: 'wheat',
      status: 'published',
      latitude: '28.962682',
      longitude: '70.729352',
      // addressCoords: {
      //   latitude: 28.962682,
      //   longitude: 70.729352,
      // },
      farmArea: [
        {latitude: 28.960848, longitude: 70.742641, id: '5'},
        {latitude: 28.960843, longitude: 70.743293, id: '6'},
        {latitude: 28.959837, longitude: 70.743336, id: '7'},
        {latitude: 28.959845, longitude: 70.742665, id: '8'},
      ],
    },
    {
      id: 13,
      title: 'Farm Three',
      address: 'Location 3',
      size: '260',
      cropType: 'rice',
      status: 'pending',
      latitude: '28.962682',
      longitude: '70.729352',
      // addressCoords: {
      //   latitude: 28.962682,
      //   longitude: 70.729352,
      // },
      farmArea: [
        {latitude: 28.962968, longitude: 70.729225, id: '9'},
        {latitude: 28.962964, longitude: 70.72955, id: '10'},
        {latitude: 28.96246, longitude: 70.729536, id: '11'},
        {latitude: 28.962444, longitude: 70.729234, id: '12'},
      ],
    },
  ],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setAuthInitialRoute: (state, {payload}) => {
      state.authInitialRoute = payload;
    },
    setUserSession: (state, {payload}) => {
      state.isLoggedIn = payload;
    },
    setUser: (state, {payload}: SetUserAction) => {
      state.user = payload;
    },
    setPreferredLanguage: (state, {payload}: SetPreferredLanguageAction) => {
      state.preferredLanguage = payload;
    },
    addMyFarm: (state, {payload}: AddMyFarmAction) => {
      state.myFarms.unshift(payload);
    },
    handleLogout: state => {
      state.user = null;
      state.isLoggedIn = false;
      
    },

    resetMainReducer: () => initialState,
  },
});

export const {
  setPreferredLanguage,
  handleLogout,
  setAuthInitialRoute,
  setUser,
  setUserSession,
  resetMainReducer,
  addMyFarm,
} = mainSlice.actions;

export default mainSlice.reducer;
